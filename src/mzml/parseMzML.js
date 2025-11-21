import { parse } from 'arraybuffer-xml-parser';
import { recursiveResolve } from 'ml-spectra-processing';

import { decodeData } from '../util/decodeData.js';

import { parseCvParam } from './parseCvParam.js';
import { processSpectrumList } from './processSpectrumList.js';

const decoder = new TextDecoder();

// https://www.psidev.info/mzml
// CV = Controlled vocabulary
export async function parseMzML(mzmlBuffer, options = {}) {
  const { logger = console, rawData } = options;

  if (!(mzmlBuffer instanceof ArrayBuffer)) {
    throw new TypeError('mzmlBuffer should be an ArrayBuffer');
  }

  if (rawData && !(rawData instanceof ArrayBuffer)) {
    throw new TypeError('rawData should be an ArrayBuffer');
  }

  const rawDataUint8Array = rawData && new Uint8Array(rawData);

  const result = {
    metadata: {},
    times: [],
    series: {
      ms: {
        data: [],
      },
    },
  };

  const referenceableParamGroups = {};

  let parsed = parse(mzmlBuffer, {
    attributesNodeName: 'attributes',
    attributeNameProcessor: (attributeName) => attributeName,
    tagNameProcessor: (name, nodes) => {
      if (name !== 'referenceableParamGroupList') {
        return name;
      }
      for (const group of nodes[0]?.children?.referenceableParamGroup) {
        const id = group.attributes.id;
        const cvParam = parseCvParam(group.children.cvParam);

        referenceableParamGroups[id] = {};
        Object.values(cvParam).map((value) => {
          referenceableParamGroups[id][value.accession] = value.value;
        });
      }
      return name;
    },
    tagValueProcessor: (value, node) => {
      if (node.tagName !== 'binary') return decoder.decode(value);
      const referenceableParamGroupRefs =
        node.parent?.children?.referenceableParamGroupRef?.map(
          (ref) => ref.attributes.ref,
        ) || [];
      const ontologies = {};
      referenceableParamGroupRefs.forEach((ref) => {
        if (referenceableParamGroups[ref]) {
          Object.assign(ontologies, referenceableParamGroups[ref]);
        }
      });
      node.parent.children.cvParam.forEach((cv) => {
        ontologies[cv.attributes.accession] = cv.attributes.value;
      });

      let promise;
      if ('IMS:1000102' in ontologies) {
        // external data offset
        const offset = parseInt(ontologies['IMS:1000102'], 10);
        const encodedLength = parseInt(ontologies['IMS:1000104'], 10);

        promise = decodeData(
          rawDataUint8Array.subarray(offset, offset + encodedLength),
          {
            ontologies,
            base64: false,
          },
        );
      } else {
        promise = decodeData(node.bytes, { ontologies, base64: true });
      }

      // avoid unhandled promise rejection and swallow the error
      promise.catch((error) => {
        logger.error('error decoding base64', error);
        return [];
      });
      return promise;
    },
  });
  // parsed file still contains promises
  await recursiveResolve(parsed);

  const mzML = parsed.mzML || parsed.indexedmzML.mzML;

  processSpectrumList(mzML, result.times, result.series.ms.data);

  return result;
}

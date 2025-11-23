import { parse } from 'arraybuffer-xml-parser';
import { recursiveResolve } from 'ml-spectra-processing';

import { decodeData } from '../util/decodeData.js';

import { processSpectrumList } from './processSpectrumList.js';

const decoder = new TextDecoder();

// https://www.psidev.info/mzml
// CV = Controlled vocabulary
export async function parseMzML(mzmlBuffer, options = {}) {
  const { logger = console } = options;
  let { rawData } = options;

  // need to allow Buffer, ArrayBuffer or TypedArray and convert to Uint8Array
  mzmlBuffer = new Uint8Array(mzmlBuffer);
  if (rawData) {
    rawData = new Uint8Array(rawData);
  }

  const rawDataUint8Array = rawData && new Uint8Array(rawData);

  const result = {
    metadata: {},
    times: [],
    xPositions: [],
    yPositions: [],
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
      switch (name) {
        case 'referenceableParamGroupList':
          {
            const children = nodes[0]?.children?.referenceableParamGroup;
            for (const group of children) {
              const id = group.attributes?.id;
              referenceableParamGroups[id] = group.children;
            }
          }
          break;
        case 'referenceableParamGroupRef':
          for (const node of nodes) {
            // need to append the references children to the parent
            const ref = node.attributes.ref;
            if (referenceableParamGroups[ref]) {
              const parent = node.parent;
              parent.children = parent.children || {};
              for (const key in referenceableParamGroups[ref]) {
                parent.children[key] = parent.children[key] || [];
                parent.children[key].push(
                  ...referenceableParamGroups[ref][key],
                );
              }
            }
          }
          break;
        case 'cvParam':
          break;
        default:
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

  processSpectrumList(mzML, result);

  return result;
}

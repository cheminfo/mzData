import { parse } from 'arraybuffer-xml-parser';
import { recursiveResolve } from 'ml-spectra-processing';

import { parseCvParam } from '../mzml/parseCvParam.js';
import { processSpectrumList } from '../mzml/processSpectrumList.js';
import { decodeData } from '../util/decodeData.js';

//import { processSpectrumList } from './processSpectrumList.js';

const decoder = new TextDecoder();

// https://www.psidev.info/mzml
// CV = Controlled vocabulary
export async function parseImzML(imzMLBuffer, ibdBuffer, options = {}) {
  const { logger = console } = options;
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

  let parsed = parse(imzMLBuffer, {
    attributesNodeName: 'attributes',
    attributeNameProcessor: (attributeName) => {
      return attributeName;
    },
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
        node.parent.children.referenceableParamGroupRef.map(
          (ref) => ref.attributes.ref,
        );
      const ontologies = {};
      referenceableParamGroupRefs.forEach((ref) => {
        if (referenceableParamGroups[ref]) {
          Object.assign(ontologies, referenceableParamGroups[ref]);
        }
      });
      node.parent.children.cvParam.forEach((cv) => {
        ontologies[cv.attributes.accession] = cv.attributes.value;
      });
      // IMS:1000102 - external offset
      // IMS:1000103 - external array length
      // IMS:1000104 - external encoded length
      const start = parseInt(ontologies['IMS:1000102'], 10);
      const length = parseInt(ontologies['IMS:1000103'], 10);
      const data = new Uint8Array(ibdBuffer, start, length);
    },
  });
  console.log(referenceableParamGroups);

  const mzML = parsed.mzML || parsed.indexedmzML.mzML;

  processSpectrumList(mzML, result.times, result.series.ms.data);
  return result;
}

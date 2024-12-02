import { parse } from 'arraybuffer-xml-parser';

import { decodeBase64 } from '../util/decodeBase64';

import { processSpectrumList } from './processSpectrumList';

const decoder = new TextDecoder();

// https://www.psidev.info/mzml
// CV = Controlled vocabulary
export function parseMzML(arrayBuffer) {
  const result = {
    metadata: {},
    times: [],
    series: {
      ms: {
        data: [],
      },
    },
  };

  let parsed = parse(arrayBuffer, {
    attributeNamePrefix: '',
    attributesNodeName: 'attributes',
    tagValueProcessor: (value, node) => {
      if (node.tagName !== 'binary') return decoder.decode(value);
      const ontologies = node.parent.children.cvParam.map(
        (entry) => entry.attributes.accession,
      );

      return decodeBase64(node.value, { ontologies });
    },
  });

  const mzML = parsed.mzML || parsed.indexedmzML.mzML;

  processSpectrumList(mzML, result.times, result.series.ms.data);

  return result;
}

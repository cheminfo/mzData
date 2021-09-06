import { parse } from 'arraybuffer-xml-parser';

import { decodeBase64 } from '../util/decodeBase64';

import { processSpectrumList } from './processSpectrumList';

const decoder = new TextDecoder();

export function parseMzXML(arrayBuffer) {
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
      if (node.tagName !== 'peaks') return decoder.decode(value);
      return decodeBase64(node.value, {
        precision: node.attributes.precision,
        endian: node.attributes.byteOrder,
        compression: node.attributes.compressionType,
      });
    },
  });

  processSpectrumList(parsed.mzXML, result.times, result.series.ms);

  return result;
}

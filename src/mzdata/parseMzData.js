import { parse } from 'arraybuffer-xml-parser';

import { decodeBase64 } from '../util/decodeBase64';

import { processMetadata } from './processMetaData';
import { processSpectrumList } from './processSpectrumList';

const decoder = new TextDecoder();

export function parseMzData(arrayBuffer) {
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
      if (node.tagName !== 'data') return decoder.decode(value);
      return decodeBase64(node.value, node.attributes);
    },
  });

  processMetadata(parsed.mzData, result.metadata);
  processSpectrumList(parsed.mzData, result.times, result.series.ms.data);

  return result;
}

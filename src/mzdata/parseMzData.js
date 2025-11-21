import { parse } from 'arraybuffer-xml-parser';
import { recursiveResolve } from 'ml-spectra-processing';

import { decodeData } from '../util/decodeData.js';

import { processMetadata } from './processMetaData.js';
import { processSpectrumList } from './processSpectrumList.js';

const decoder = new TextDecoder();

/**
 *
 * @param {*} arrayBuffer
 * @param {import('../Options.js').Options} [options={}]
 * @returns
 */
export async function parseMzData(arrayBuffer, options = {}) {
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

  let parsed = parse(arrayBuffer, {
    attributesNodeName: 'attributes',
    attributeNameProcessor: (attributeName) => attributeName,
    tagValueProcessor: (value, node) => {
      if (node.tagName !== 'data') return decoder.decode(value);
      const promise = decodeData(node.bytes, node.attributes);
      // avoid unhandled promise rejection and swallow the error
      promise.catch((error) => {
        logger.error('error decoding base64', error);
        return [];
      });
      return promise;
    },
  });
  await recursiveResolve(parsed);
  processMetadata(parsed.mzData, result.metadata);
  processSpectrumList(parsed.mzData, result.times, result.series.ms.data);

  return result;
}

import { parse } from 'arraybuffer-xml-parser';
import { recursiveResolve } from 'ml-spectra-processing';

import { decodeBase64 } from '../util/decodeBase64';

import { processSpectrumList } from './processSpectrumList';

const decoder = new TextDecoder();

/**
 *
 * @param {*} arrayBuffer
 * @param {import('../Options.js').Options} [options]
 * @returns
 */
export async function parseMzXML(arrayBuffer, options = {}) {
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
      if (node.tagName !== 'peaks') return decoder.decode(value);

      const promise = decodeBase64(node.bytes, {
        precision: node.attributes.precision,
        endian: node.attributes.byteOrder,
        compression: node.attributes.compressionType,
      });
      // avoid unhandled promise rejection and swallow the error
      promise.catch((error) => {
        logger.error('error decoding base64', error);
        return [];
      });
      return promise;
    },
  });
  await recursiveResolve(parsed);

  processSpectrumList(parsed.mzXML, result.times, result.series.ms);

  return result;
}

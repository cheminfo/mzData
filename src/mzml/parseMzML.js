import { parse } from 'arraybuffer-xml-parser';
import { recursiveResolve } from 'ml-spectra-processing';
import { ParallelWorkersManager } from 'parallel-workers-manager';

import { decodeBase64 } from '../util/decodeBase64Bundle.js';

import { processSpectrumList } from './processSpectrumList.js';

const decoder = new TextDecoder();

// https://www.psidev.info/mzml
// CV = Controlled vocabulary
export async function parseMzML(arrayBuffer, options = {}) {
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

  const manager = new ParallelWorkersManager(decodeBase64);

  let parsed = parse(arrayBuffer, {
    attributesNodeName: 'attributes',
    attributeNameProcessor: (attributeName) => attributeName,
    tagValueProcessor: (value, node) => {
      if (node.tagName !== 'binary') return decoder.decode(value);
      const ontologies = node.parent.children.cvParam.map(
        (entry) => entry.attributes.accession,
      );
      //   const promise = decodeBase64(node.bytes, { ontologies });
      return manager.post([node.bytes, { ontologies }]);
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

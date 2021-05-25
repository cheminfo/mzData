import { ensureString } from 'ensure-string';
import { parse } from 'fast-xml-parser';

import { processMZData } from './mzdata/process';
import { processMZML } from './mzml/process';
import { processMZXML } from './mzxml/process';
import { searchObjectKey } from './util/searchObjectKey';

/**
 * Reads a mzData v1.05 file
 * @param {ArrayBuffer|string} xml - ArrayBuffer or String or any Typed Array (including Node.js' Buffer from v4) with the data
 * @return {{times: Array<number>, series: { ms: { data:Array<Array<number>>}}}}
 */
export function parseMZ(xml) {
  xml = ensureString(xml);

  if (typeof xml !== 'string') throw new TypeError('xml must be a string');

  let parsed = parse(xml, {
    textNodeName: '_data',
    attributeNamePrefix: '',
    parseAttributeValue: true,
    attrNodeName: '_attr',
    ignoreAttributes: false,
  });

  let topLevel = searchObjectKey(parsed, /^(mzdata|mzml|mzxml)$/i);
  if (!topLevel) {
    throw new Error('MZ parser: can not find tag mzdata, mzml or mzxml');
  }

  let result = {
    metadata: {},
    times: [],
    series: {
      ms: {
        data: [],
      },
    },
  };

  switch (Object.keys(topLevel)[0]) {
    case 'mzdata':
      processMZData(topLevel.mzdata, result);
      break;
    case 'mzml':
      processMZML(topLevel.mzml, result);
      break;
    case 'mzxml':
      processMZXML(topLevel.mzxml, result);
      break;
    default:
      throw new Error(`MZ parser: unknown format: ${Object.keys(topLevel)[0]}`);
  }

  return result;
}

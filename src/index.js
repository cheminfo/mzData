'use strict';

const FastXmlParser = require('fast-xml-parser');

const processMZData = require('./mzdata/process');
const processMZML = require('./mzml/process');

const ensureText = require('./util/ensureText');
const searchObjectKey = require('./util/searchObjectKey');

/**
 * Reads a mzData v1.05 file
 * @param {ArrayBuffer|string} xml - ArrayBuffer or String or any Typed Array (including Node.js' Buffer from v4) with the data
 * @return {{times: Array<number>, series: { ms: { data:Array<Array<number>>}}}}
 */
function mzData(xml) {
  xml = ensureText(xml);

  if (typeof xml !== 'string') throw new TypeError('xml must be a string');

  let parsed = FastXmlParser.parse(xml, {
    textNodeName: '_data',
    attributeNamePrefix: '',
    parseAttributeValue: true,
    attrNodeName: '_attr',
    ignoreAttributes: false
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
        data: []
      }
    }
  };

  switch (Object.keys(topLevel)[0]) {
    case 'mzdata':
      processMZData(topLevel.mzdata, result);
      break;
    case 'mzml':
      processMZML(topLevel.mzml, result);
      break;
    case 'mzxml':
      break;
    default:
      throw new Error('MZ parser: unknown format: ' + Object.keys(topLevel)[0]);
  }

  return result;
}

module.exports = mzData;

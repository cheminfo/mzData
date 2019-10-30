'use strict';

const FastXmlParser = require('fast-xml-parser');

const processMetadata = require('./processMetaData');
const processSpectrumList = require('./processSpectrumList');
const ensureText = require('./util/ensureText');

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
    ignoreAttributes: false,
  });

  if (!parsed.mzData) throw new Error('The parent node is not mzData');

  let result = {
    metadata: {},
    times: [],
    series: {
      ms: {
        data: [],
      },
    },
  };

  processMetadata(parsed.mzData, result.metadata);

  processSpectrumList(parsed.mzData, result.times, result.series.ms.data);

  return result;
}

module.exports = mzData;

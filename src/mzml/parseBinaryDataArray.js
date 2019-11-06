'use strict';

const pako = require('pako');
const toByteArray = require('base64-js').toByteArray;
const parseCvParam = require('./parseCvParam');

function decodeData(node) {
  let data = node.binary;
  let attr = node._attr;
  let cvParam = parseCvParam(node.cvParam);
  if (!data || !attr) return [];
  let buffer = decoder(data, cvParam);
  let kind = '';
  if (cvParam.mzArray) {
    kind = 'mz';
  } else if (cvParam.intensityArray) {
    kind = 'intensity';
  } else {
    throw new Error('unknown binary data type');
  }

  if (cvParam['64BitFloat']) {
    let result = {};
    result[kind] = new Float64Array(buffer.buffer);
    return result;
  } else if (cvParam['32BitFloat']) {
    let result = {};
    result[kind] = new Float32Array(buffer.buffer);
    return result;
  }

  throw new Error(`unknown precision in decoder: ${attr.precision}`);
}

function decoder(base64Encoded, cvParams = {}) {
  if (cvParams.zlibCompression) {
    return pako.inflate(toByteArray(base64Encoded));
  } else {
    return toByteArray(base64Encoded);
  }
}

module.exports = decodeData;

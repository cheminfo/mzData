'use strict';

const toByteArray = require('base64-js').toByteArray;

function decodeData(node) {
  let data = node._data;
  let attr = node._attr;
  if (!data || !attr) return [];
  var buffer = toByteArray(data);
  switch (attr.precision) {
    case 32:
      return new Float32Array(buffer.buffer);
      break;
    case 64:
      return new Float64Array(buffer.buffer);
      break;
    default:
      throw new Error('unknown precision in decoder: ' + options.precision);
  }
}

module.exports = decodeData;

import pako from 'pako';
import { toByteArray } from 'base64-js';

import { parseCvParam } from './parseCvParam';

export function parseBinaryDataArray(node) {
  let data = node.peaks;
  let attr = node._attr;
  let cvParam = parseCvParam(data._attr);
  if (!data || !attr) return [];
  let bytes = decoder(data._data, cvParam);

  let kind = '';
  if (cvParam.contentType) {
    kind = cvParam.contentType;
  } else if (cvParam.pairOrder) {
    kind = cvParam.pairOrder;
  } else {
    throw new Error('unknown binary data type');
  }

  // console.log(buffer)
  if (cvParam.precision === 64) {
    let result = {};
    let buffer = Buffer.from(bytes);
    result.data = new Float64Array(buffer.length / 8);
    for (let i = 0; i < buffer.length; i += 8) {
      result.data[i / 8] = buffer.readDoubleBE(i);
    }
    result.kind = kind;
    return result;
  } else if (cvParam.precision === 32) {
    let result = {};
    result.data = new Float32Array(bytes);
    result.kind = kind;
    return result;
  }
  throw new Error(`unknown precision in decoder: ${attr.precision}`);
}

function decoder(base64Encoded, cvParams = {}) {
  if (cvParams.compressionType === 'zlib') {
    return pako.inflate(toByteArray(base64Encoded));
  } else {
    return toByteArray(base64Encoded);
  }
}

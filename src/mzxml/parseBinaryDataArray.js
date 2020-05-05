import { Buffer } from 'buffer/';

import pako from 'pako';
import { toByteArray } from 'base64-js';

import { parseCvParam } from './parseCvParam';

export function parseBinaryDataArray(node) {
  let data = node.peaks;
  let attr = node._attr;
  let string = data._data;
  let base64 = /^([A-Za-z0-9/+]{4})*(([A-Za-z0-9/+]{3}=)|([A-Za-z0-9/+]{2}==))?$/;
  if (base64.test(string) === false) {
    return {
      data: [],
    };
  }
  let cvParam = parseCvParam(data._attr);
  if (!data || !attr) return [];
  let bytes = decoder(data._data, cvParam);
  let kind = cvParam.contentType ? cvParam.contentType : cvParam.pairOrder;
  let buffer = Buffer.from(bytes);
  let result = {};
  if (cvParam.precision === 64) {
    result.data = new Float64Array(buffer.length / 8);
    for (let i = 0; i < buffer.length; i += 8) {
      result.data[i / 8] = buffer.readDoubleBE(i);
    }
    result.kind = kind;
    return result;
  } else if (cvParam.precision === 32) {
    result.data = new Float64Array(buffer.length / 4);
    for (let i = 0; i < buffer.length; i += 4) {
      result.data[i / 4] = buffer.readFloatBE(i);
    }
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

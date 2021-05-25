import { toByteArray } from 'base64-js';
import pako from 'pako';

import { parseCvParam } from './parseCvParam';

export function parseBinaryDataArray(node) {
  const data = node.peaks;
  const attr = node._attr;
  const string = data._data;
  const base64 = /^([A-Za-z0-9/+]{4})*(([A-Za-z0-9/+]{3}=)|([A-Za-z0-9/+]{2}==))?$/;
  if (base64.test(string) === false) {
    return {
      data: [],
    };
  }
  const cvParam = parseCvParam(data._attr);
  if (!data || !attr) return [];
  const bytes = decoder(data._data, cvParam);
  const kind = cvParam.contentType ? cvParam.contentType : cvParam.pairOrder;
  const buffer = new DataView(bytes.buffer);
  let result = {};
  if (cvParam.precision === 64) {
    result.data = new Float64Array(bytes.byteLength / 8);
    for (let i = 0; i < bytes.byteLength; i += 8) {
      result.data[i / 8] = buffer.getFloat64(i);
    }
    result.kind = kind;
    return result;
  } else if (cvParam.precision === 32) {
    result.data = new Float64Array(bytes.byteLength / 4);
    for (let i = 0; i < bytes.byteLength; i += 4) {
      result.data[i / 4] = buffer.getFloat32(i);
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

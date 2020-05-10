export function parseCvParam(cvParam) {
  let result = {};
  if (!cvParam) return result;
  let cvParams;
  if (Array.isArray(cvParam)) {
    cvParams = cvParam;
  } else {
    cvParams = [cvParam];
  }
  for (let param of cvParams) {
    if (param.precision) {
      result = {
        precision: param.precision,
        byteOrder: param.byteOrder,
        contentType: param.contentType,
        pairOrder: param.pairOrder,
        compressionType: param.compressionType,
      };
    }
  }
  return result;
}

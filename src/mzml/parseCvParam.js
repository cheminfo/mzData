import camelCase from 'camelcase';

export function parseCvParam(cvParam) {
  let result = {};
  if (!cvParam) return result;
  let cvParams;
  if (Array.isArray(cvParam)) {
    cvParams = cvParam;
  } else {
    cvParams = [cvParam];
  }
  for (let parameter of cvParams) {
    let attributes = parameter.attributes;
    if (attributes.name) {
      result[attributes.accession] = attributes;
    }
  }
  return result;
}

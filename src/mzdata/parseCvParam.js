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
    let attributes = param.attributes;
    if (attributes.name) {
      result[attributes.name.toLowerCase()] = {
        accession: attributes.accession,
        cvLabel: attributes.cvLabel,
        value: attributes.value,
        name: attributes.name,
      };
    }
  }
  return result;
}

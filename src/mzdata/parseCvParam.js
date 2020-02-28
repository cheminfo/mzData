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
    let attr = param._attr;
    if (attr.name) {
      result[attr.name.toLowerCase()] = {
        accession: attr.accession,
        cvLabel: attr.cvLabel,
        value: attr.value,
        name: attr.name,
      };
    }
  }
  return result;
}

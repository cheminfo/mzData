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
    let attribute = parameter.attributes;
    if (attribute.name) {
      result[
        camelCase(attribute.name.toLowerCase().replace(/[^ a-z0-9]/g, ''))
      ] = {
        accession: attribute.accession,
        cvLabel: attribute.cvLabel,
        value: attribute.value,
        name: attribute.name,
      };
    }
  }
  return result;
}

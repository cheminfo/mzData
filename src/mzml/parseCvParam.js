'use strict';

const camelCase = require('camelcase');

function parseCvParam(cvParam) {
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
      result[camelCase(attr.name.toLowerCase().replace(/[^ a-z0-9]/g, ''))] = {
        accession: attr.accession,
        cvLabel: attr.cvLabel,
        value: attr.value,
        name: attr.name
      };
    }
  }
  return result;
}

module.exports = parseCvParam;

'use strict';

const parseCvParam = require('./parseCvParam.js');

function processMetadata(parsed, metadata) {
  if (!parsed || !parsed.description) return;
  let description = parsed.description;
  if (description.dataProcessing) {
    let dataProcessing = description.dataProcessing;
    if (dataProcessing.software && dataProcessing.software.name) {
      metadata.software = dataProcessing.software.name;
    }
  }
  if (description.instrument) {
    let instrument = description.instrument;
    if (instrument.analyzerList && instrument.analyzerList.analyzer) {
      let analyzer = instrument.analyzerList.analyzer;
      let cvParam = parseCvParam(analyzer.cvParam);
      if (cvParam.analyzertype) {
        metadata.analyzer = cvParam.analyzertype.value;
      }
    }
    if (instrument.detector) {
      let detector = instrument.detector;
      let cvParam = parseCvParam(detector.cvParam);
      if (cvParam.detectortype) {
        metadata.detector = cvParam.detectortype.value;
      }
    }
  }
}

module.exports = processMetadata;

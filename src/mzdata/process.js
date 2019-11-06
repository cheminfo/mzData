const processMetadata = require('./processMetaData');
const processSpectrumList = require('./processSpectrumList');

function processMZData(topLevel, result) {
  processMetadata(topLevel, result.metadata);
  processSpectrumList(topLevel, result.times, result.series.ms.data);
}

module.exports = processMZData;

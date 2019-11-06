const processSpectrumList = require('./processSpectrumList');

function processMZML(topLevel, result) {
  //processMetadata(topLevel, result.metadata);
  processSpectrumList(topLevel, result.times, result.series.ms.data);
}

module.exports = processMZML;

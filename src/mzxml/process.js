import { processSpectrumList } from './processSpectrumList';

export function processMZXML(topLevel, result) {
  processSpectrumList(topLevel, result.times, result.series.ms.data);
  result.metadata.dataProcessing = topLevel.msRun.dataProcessing;
  result.metadata.msInstrument = topLevel.msRun.msInstrument;
}

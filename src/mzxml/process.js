import { processSpectrumList } from './processSpectrumList';

export function processMZXML(topLevel, result) {
  processSpectrumList(topLevel, result.times, result.series.ms);
}

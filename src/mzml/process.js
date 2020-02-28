import { processSpectrumList } from './processSpectrumList';

export function processMZML(topLevel, result) {
  //processMetadata(topLevel, result.metadata)
  processSpectrumList(topLevel, result.times, result.series.ms.data);
}

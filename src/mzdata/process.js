import { processMetadata } from './processMetaData';
import { processSpectrumList } from './processSpectrumList';

export function processMZData(topLevel, result) {
  processMetadata(topLevel, result.metadata);
  processSpectrumList(topLevel, result.times, result.series.ms.data);
}

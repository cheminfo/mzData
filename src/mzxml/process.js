import { processSpectrumList } from './processSpectrumList';

export function processMZXML(topLevel, result) {
  processSpectrumList(topLevel, result.series.ms);
  let offset = topLevel.index.offset;
  for (let i = 0; i < offset.length; i++) {
    let index = offset[i]._attr.id;
    let data = offset[i]._data;
    result.times[index - 1] = data;
  }
  result.metadata = {
    msManufacturer: topLevel.msRun.msInstrument.msManufacturer._attr,
    msModel: topLevel.msRun.msInstrument.msModel._attr,
    msIonisation: topLevel.msRun.msInstrument.msIonisation._attr,
    msMassAnalyzer: topLevel.msRun.msInstrument.msMassAnalyzer._attr,
    msDetector: topLevel.msRun.msInstrument.msDetector._attr,
    software: topLevel.msRun.msInstrument.software._attr,
  };
}

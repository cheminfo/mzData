import { parseCvParam } from './parseCvParam.js';

export function processSpectrumList(parsed, times, msData) {
  if (!parsed || !parsed.spectrumList || !parsed.spectrumList.spectrum) return;
  let spectrumList = parsed.spectrumList.spectrum;
  for (let spectrum of spectrumList) {
    let info = parseCvParam(
      spectrum.spectrumDesc.spectrumSettings.spectrumInstrument.cvParam,
    );

    times.push(info.timeinminutes.value);

    let mzArray = spectrum.mzArrayBinary.data['#text'] || [];
    let intensity = spectrum.intenArrayBinary.data['#text'] || [];
    msData.push([mzArray, intensity]);
  }
}

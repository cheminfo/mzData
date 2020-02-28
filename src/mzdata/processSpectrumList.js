import { parseCvParam } from './parseCvParam';
import { decodeData } from './decodeData';

export function processSpectrumList(parsed, times, msData) {
  if (!parsed || !parsed.spectrumList || !parsed.spectrumList.spectrum) return;
  let spectrumList = parsed.spectrumList.spectrum;
  for (let spectrum of spectrumList) {
    let info = parseCvParam(
      spectrum.spectrumDesc.spectrumSettings.spectrumInstrument.cvParam,
    );
    // info.scanmode;
    // info.polarity;
    times.push(info.timeinminutes.value);
    let mzArray = decodeData(spectrum.mzArrayBinary.data);
    let intensity = decodeData(spectrum.intenArrayBinary.data);
    msData.push([mzArray, intensity]);
  }
}

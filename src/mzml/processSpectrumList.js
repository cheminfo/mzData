import { parseBinaryDataArray } from './parseBinaryDataArray';
import { parseCvParam } from './parseCvParam';

export function processSpectrumList(parsed, times, msData) {
  if (
    !parsed ||
    !parsed.run ||
    !parsed.run.spectrumList ||
    !parsed.run.spectrumList.spectrum
  ) {
    return;
  }
  let spectrumList = parsed.run.spectrumList.spectrum;

  for (let spectrum of spectrumList) {
    let scanList = spectrum.scanList;
    if (Array.isArray(scanList)) throw new Error('Unsupported scanList');

    let scan = scanList.scan;

    if (typeof scan !== 'object') continue;
    if (Array.isArray(scan)) {
      throw new Error('processSpectrumList: scan may not be an array');
    }
    let cvParam = parseCvParam(scan.cvParam);
    times.push(cvParam.scanStartTime.value);

    let dataArrayList = spectrum.binaryDataArrayList.binaryDataArray;
    if (dataArrayList.length !== 2) {
      throw new Error('Can not decodeData because length !== 2');
    }

    let first = parseBinaryDataArray(dataArrayList[0]);
    let second = parseBinaryDataArray(dataArrayList[1]);

    msData.push([first.mz || second.mz, second.intensity || first.intensity]);
  }
}

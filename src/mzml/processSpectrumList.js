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
    if (!spectrum.binaryDataArrayList) continue;
    let scanList = spectrum.scanList;
    if (Array.isArray(scanList)) throw new Error('Unsupported scanList');

    let scan = scanList.scan;

    if (typeof scan !== 'object') continue;
    if (Array.isArray(scan)) {
      throw new Error('processSpectrumList: scan may not be an array');
    }
    const cvParam = parseCvParam(scan.cvParam);
    times.push(cvParam.scanStartTime.value);

    const dataArrayList = spectrum.binaryDataArrayList.binaryDataArray;
    if (dataArrayList.length !== 2) {
      throw new Error('Can not decodeData because length !== 2');
    }

    const first = dataArrayList[0];
    const firstCVParams = parseCvParam(first.cvParam);
    const second = dataArrayList[1];
    const secondCVParams = parseCvParam(second.cvParam);

    if (firstCVParams.mzArray && secondCVParams.intensityArray) {
      msData.push([first.binary, second.binary]);
    }
    if (firstCVParams.intensityArray && secondCVParams.mzArray) {
      msData.push([second.binary, first.binary]);
    }
  }
}

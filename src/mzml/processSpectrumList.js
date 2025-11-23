import { parseCvParam } from './parseCvParam.js';

export function processSpectrumList(parsed, result) {
  if (
    !parsed ||
    !parsed.run ||
    !parsed.run.spectrumList ||
    !parsed.run.spectrumList.spectrum
  ) {
    return;
  }
  let spectrumList = parsed.run.spectrumList.spectrum;
  const msData = result.series.ms.data;

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
    result.times.push(cvParam['MS:1000016']?.value);
    result.xPositions.push(cvParam['IMS:1000050']?.value);
    result.yPositions.push(cvParam['IMS:1000051']?.value);

    const dataArrayList = spectrum.binaryDataArrayList.binaryDataArray;
    if (dataArrayList.length !== 2) {
      throw new Error('Can not decodeData because length !== 2');
    }

    const first = dataArrayList[0];
    const firstCVParams = parseCvParam(first.cvParam);
    const second = dataArrayList[1];
    const secondCVParams = parseCvParam(second.cvParam);

    // MS:1000514 - m/z array
    // MS:1000515 - intensity array
    if (firstCVParams['MS:1000514'] && secondCVParams['MS:1000515']) {
      msData.push([first.binary, second.binary]);
    }
    if (firstCVParams['MS:1000515'] && secondCVParams['MS:1000514']) {
      msData.push([second.binary, first.binary]);
    }
  }
}

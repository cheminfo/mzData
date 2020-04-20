import { parseBinaryDataArray } from './parseBinaryDataArray';

export function processSpectrumList(parsed, msData) {
  if (!parsed.msRun.scan) return;
  let scanList = parsed.msRun.scan;
  if (Array.isArray(scanList) === false) scanList = [scanList];
  if (scanList[0]._attr) {
    msData.info = [];
  }
  for (let scan of scanList) {
    if (typeof scan !== 'object') continue;
    if (Array.isArray(scan)) {
      throw new Error('processSpectrumList: scan may not be an array');
    }
    let dataArray = parseBinaryDataArray(scan);
    let first = new Float64Array(dataArray.data.length / 2);
    let second = new Float64Array(dataArray.data.length / 2);
    for (let i = 0; i < dataArray.data.length / 2; i++) {
      first[i] = dataArray.data[i * 2];
      second[i] = dataArray.data[i * 2 + 1];
    }
    msData.data.push([first, second]);
    msData.info.push(scan._attr);
  }
}

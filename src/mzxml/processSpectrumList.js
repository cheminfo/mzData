import { parseBinaryDataArray } from './parseBinaryDataArray';

export function processSpectrumList(parsed, times, msData) {
  if (!parsed.msRun.scan) return;
  let scanList = parsed.msRun.scan;
  if (Array.isArray(scanList) === false) scanList = [scanList];

  for (let scan of scanList) {
    if (typeof scan !== 'object') continue;
    if (Array.isArray(scan)) {
      throw new Error('processSpectrumList: scan may not be an array');
    }
    let dataArray = parseBinaryDataArray(scan);
    msData.push(dataArray);
  }
}

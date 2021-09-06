export function processSpectrumList(parsed, times, msData) {
  if (!parsed.msRun.scan) return;
  let scanList = parsed.msRun.scan;
  if (Array.isArray(scanList) === false) scanList = [scanList];
  if (scanList[0].attributes) msData.info = [];
  for (let scan of scanList) {
    if (typeof scan !== 'object') continue;
    if (Array.isArray(scan)) {
      throw new Error('processSpectrumList: scan may not be an array');
    }
    const dataArray = scan.peaks['#text'];
    let length = dataArray.length / 2;
    let first = new Float64Array(length);
    let second = new Float64Array(length);
    for (let i = 0; i < length; i++) {
      first[i] = dataArray[i * 2];
      second[i] = dataArray[i * 2 + 1];
    }
    msData.data.push([first, second]);
    msData.info.push(scan.attributes);
    times.push(
      parseFloat(scan.attributes.retentionTime.replace(/(P*)(T*)(S*)/gi, '')),
    );
  }
}

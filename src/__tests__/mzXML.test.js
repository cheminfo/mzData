import { readFileSync } from 'fs';
import { join } from 'path';

import { parseMZ } from '..';

const pathFiles = join(__dirname, '/../../testFiles/mzXML/');

describe('mzML', () => {
  it('tiny2.0.mzXML', () => {
    const data = readFileSync(join(pathFiles, 'tiny2.0.mzXML'));
    let response = parseMZ(data);
    expect(response.times).toStrictEqual([1209, 2577]);
    expect(response.series.ms.data).toHaveLength(2);
    expect(response.series.ms.data[0][0]).toHaveLength(5252);
    expect(response.series.ms.data[1][0]).toHaveLength(172);
  });

  it('read compressed tiny3.0.mzXML 32bits', () => {
    const data = readFileSync(join(pathFiles, 'tiny3.0.mzXML'));
    let response = parseMZ(data);
    expect(response.times).toStrictEqual([1209, 2577]);
    expect(response.series.ms.data).toHaveLength(2);
    expect(response.series.ms.data[0][0]).toHaveLength(391);
    expect(response.series.ms.data[1][0]).toHaveLength(27);
  });

  it('read metadata scan 2 of compressed tiny3.0.mzXML 32bits', () => {
    const data = readFileSync(join(pathFiles, 'tiny3.0.mzXML'));
    let response = parseMZ(data);
    let metadata = {
      num: 2,
      msLevel: 2,
      peaksCount: 43,
      polarity: '+',
      scanType: 'Full',
      retentionTime: 'PT356.68S',
      collisionEnergy: 35,
      lowMz: 223.089,
      highMz: 531.078,
      basePeakMz: 428.905,
      basePeakIntensity: 301045,
      totIonCurrent: 764637,
    };
    expect(response.series.ms.info[1]).toStrictEqual(metadata);
  });

  it('read bigTest.mzML', () => {
    const data = readFileSync(join(pathFiles, 'bigTest.mzXML'));
    let response = parseMZ(data);
    expect(response.times).toHaveLength(12000);
    expect(response.times.slice(0, 6)).toStrictEqual([
      965,
      28941,
      29370,
      29799,
      30228,
      30657,
    ]);
    expect(response.series.ms.data).toHaveLength(12000);
    expect(response.series.ms.data[0][0]).toHaveLength(1296);
    expect(response.series.ms.data[1][0]).toHaveLength(2);
    expect(response.series.ms.data[2][0]).toHaveLength(2);
  });
});

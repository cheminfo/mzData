import { readFileSync } from 'fs';
import { join } from 'path';

import { parseMZ } from '..';

const pathFiles = join(__dirname, '/../../testFiles/mzXML/');

describe('mzML', () => {
  it('read 32 bits mzXML test file', () => {
    const data = readFileSync(join(pathFiles, 'tiny2.0.mzXML'));
    let response = parseMZ(data);
    expect(response.times).toStrictEqual([353.43, 356.68]);
    expect(response.series.ms.data).toHaveLength(2);
    expect(response.series.ms.data[0][0]).toHaveLength(1313);
    expect(response.series.ms.data[1][0]).toHaveLength(43);
  });

  it('read 32 bits mzXML compressed test file', () => {
    const data = readFileSync(join(pathFiles, 'tiny3.0.mzXML'));
    let response = parseMZ(data);
    expect(response.times).toStrictEqual([353.43, 356.68]);
    expect(response.series.ms.data).toHaveLength(2);
    expect(response.series.ms.data[0][0]).toHaveLength(1313);
    expect(response.series.ms.data[1][0]).toHaveLength(43);
    expect(response.series.ms.data[0][0]).toHaveLength(
      response.series.ms.info[0].peaksCount,
    );
  });

  it('read 64 bits mzXML test file', () => {
    const data = readFileSync(join(pathFiles, 'bigTest.mzXML'));
    let response = parseMZ(data);
    let scans = response.series.ms.data;
    let intensity = scans[0][0].reduce((a, b) => a + b);
    let mz = scans[0][1].reduce((a, b) => a + b);
    expect(response.times).toHaveLength(12000);
    expect(intensity).toStrictEqual(258157.20765481654);
    expect(mz).toStrictEqual(295779);
    expect(response.series.ms.data).toHaveLength(12000);
    expect(response.series.ms.data[0][0]).toHaveLength(
      response.series.ms.info[0].peaksCount,
    );
    expect(response.series.ms.data[1][0]).toHaveLength(
      response.series.ms.info[1].peaksCount,
    );
    expect(response.series.ms.data[2][0]).toHaveLength(
      response.series.ms.info[2].peaksCount,
    );
  });
});

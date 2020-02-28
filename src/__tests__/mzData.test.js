import { join } from 'path';
import { readFileSync } from 'fs';

import { parseMZ } from '..';

const pathFiles = join(__dirname, '/../../testFiles/mzData/');

describe('mzData', () => {
  it.skip('read tiny.mzData.xml buffer', () => {
    const data = readFileSync(join(pathFiles, '7_19_s3_centro_neg.xml'));
    let response = parseMZ(data);
    expect(response.metadata.software).toBe('Bioworks Browser');
    expect(response.metadata.analyzer).toBe('PaulTrap');
    expect(response.metadata.detector).toBe('EM');
    expect(response.times).toStrictEqual([5.8905, 5.944667]);
    expect(response.series.ms.data).toHaveLength(2);
    expect(response.series.ms.data[0][0]).toHaveLength(1313);
    expect(response.series.ms.data[0][1]).toHaveLength(1313);
    expect(response.series.ms.data[1][0]).toHaveLength(43);
    expect(response.series.ms.data[1][1]).toHaveLength(43);
  });

  it('read tiny.mzData.xml', () => {
    const data = readFileSync(join(pathFiles, 'tiny.mzData.xml'), 'utf8');
    let response = parseMZ(data);
    expect(response.times).toStrictEqual([5.8905, 5.944667]);
    expect(response.series.ms.data).toHaveLength(2);
    expect(response.series.ms.data[0][0]).toHaveLength(1313);
    expect(response.series.ms.data[0][1]).toHaveLength(1313);
    expect(response.series.ms.data[1][0]).toHaveLength(43);
    expect(response.series.ms.data[1][1]).toHaveLength(43);
  });

  it('read real file', () => {
    const data = readFileSync(join(pathFiles, '3-28-5.mzdata.xml'), 'utf8');
    let response = parseMZ(data);
    expect(response.times).toHaveLength(3029);
    expect(response.series.ms.data).toHaveLength(3029);
    expect(response.series.ms.data[0][0]).toHaveLength(62);
    expect(response.series.ms.data[1][0]).toHaveLength(1);
    expect(response.series.ms.data[2][0]).toHaveLength(0);
  });
});

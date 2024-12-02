import { readFileSync } from 'fs';
import { join } from 'path';

import { describe, it, expect } from 'vitest';

import { parseMzData } from '../parseMzData';

const pathFiles = join(__dirname, 'data');
describe('mzData', () => {
  it('read tiny.mzData.xml', () => {
    const data = readFileSync(join(pathFiles, 'tiny.mzData.xml'));
    let response = parseMzData(data);
    expect(response.times).toStrictEqual([5.8905, 5.944667, 10]);
    expect(response.series.ms.data).toHaveLength(3);

    expect(response.series.ms.data[0][0]).toHaveLength(1313);
    expect(response.series.ms.data[0][1]).toHaveLength(1313);
    expect(response.series.ms.data[1][0]).toHaveLength(43);
    expect(response.series.ms.data[1][1]).toHaveLength(43);
    expect(response.series.ms.data[2][0]).toHaveLength(0);
    expect(response.series.ms.data[2][1]).toHaveLength(0);
  });

  it('read real file', () => {
    const data = readFileSync(join(pathFiles, 'large.mzdata.xml'), 'utf8');
    let response = parseMzData(data);
    expect(response.times).toHaveLength(3029);
    expect(response.series.ms.data).toHaveLength(3029);
    expect(response.series.ms.data[0][0]).toHaveLength(62);
    expect(response.series.ms.data[1][0]).toHaveLength(1);
    expect(response.series.ms.data[2][0]).toHaveLength(0);
  });
});

import { readFileSync } from 'fs';
import { join } from 'path';

import { parseMZ } from '..';

describe('parse', () => {
  it('from array buffer', () => {
    const data = readFileSync(
      join(__dirname, '../mzdata/__tests__/data/tiny.mzData.xml'),
    ).buffer;

    let response = parseMZ(data);
    expect(response.times).toStrictEqual([5.8905, 5.944667, 10]);
    expect(response.series.ms.data).toHaveLength(3);

    expect(response.series.ms.data[0][0]).toHaveLength(1313);
    expect(response.series.ms.data[0][1]).toHaveLength(1313);
    expect(response.series.ms.data[1][0]).toHaveLength(43);
    expect(response.series.ms.data[1][1]).toHaveLength(43);
    expect(response.series.ms.data[2][0]).toHaveLength(0);
    expect(response.series.ms.data[2][1]).toHaveLength(0);
  });

  it('from text', () => {
    const data = readFileSync(
      join(__dirname, '../mzdata/__tests__/data/tiny.mzData.xml'),
      'utf8',
    );
    let response = parseMZ(data);
    expect(response.times).toStrictEqual([5.8905, 5.944667, 10]);
    expect(response.series.ms.data).toHaveLength(3);

    expect(response.series.ms.data[0][0]).toHaveLength(1313);
    expect(response.series.ms.data[0][1]).toHaveLength(1313);
    expect(response.series.ms.data[1][0]).toHaveLength(43);
    expect(response.series.ms.data[1][1]).toHaveLength(43);
    expect(response.series.ms.data[2][0]).toHaveLength(0);
    expect(response.series.ms.data[2][1]).toHaveLength(0);
  });
});

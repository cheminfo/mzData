import { readFileSync } from 'fs';
import { join } from 'path';

import { describe, it, expect } from 'vitest';

import { parseMZ } from '..';

describe('parse', () => {
  it('from mzData array', async () => {
    const data = readFileSync(
      join(__dirname, '../mzdata/__tests__/data/tiny.mzData.xml'),
    );

    let response = await parseMZ(data);
    expect(response.times).toStrictEqual([5.8905, 5.944667, 10]);
    expect(response.series.ms.data).toHaveLength(3);

    expect(response.series.ms.data[0][0]).toHaveLength(1313);
    expect(response.series.ms.data[0][1]).toHaveLength(1313);
    expect(response.series.ms.data[1][0]).toHaveLength(43);
    expect(response.series.ms.data[1][1]).toHaveLength(43);
    expect(response.series.ms.data[2][0]).toHaveLength(0);
    expect(response.series.ms.data[2][1]).toHaveLength(0);
  });

  it('from mzData text', async () => {
    const data = readFileSync(
      join(__dirname, '../mzdata/__tests__/data/tiny.mzData.xml'),
      'utf8',
    );
    let response = await parseMZ(data);
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

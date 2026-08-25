import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { expect, test } from 'vitest';

import { parseMZ } from '../index.js';

test('from mzData array', async () => {
  const data = readFileSync(
    join(import.meta.dirname, '../mzdata/__tests__/data/tiny.mzData.xml'),
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

test('from mzData text', async () => {
  const data = readFileSync(
    join(import.meta.dirname, '../mzdata/__tests__/data/tiny.mzData.xml'),
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

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { expect, test } from 'vitest';

import { parseMzData } from '../parseMzData.js';

const pathFiles = join(import.meta.dirname, 'data');

test('read tiny.mzData.xml', async () => {
  const data = readFileSync(join(pathFiles, 'tiny.mzData.xml'));
  let response = await parseMzData(data);

  expect(response.times).toStrictEqual([5.8905, 5.944667, 10]);
  expect(response.series.ms.data).toHaveLength(3);

  expect(response.series.ms.data[0][0]).toHaveLength(1313);
  expect(response.series.ms.data[0][1]).toHaveLength(1313);
  expect(response.series.ms.data[1][0]).toHaveLength(43);
  expect(response.series.ms.data[1][1]).toHaveLength(43);
  expect(response.series.ms.data[2][0]).toHaveLength(0);
  expect(response.series.ms.data[2][1]).toHaveLength(0);
});

test('read real file', async () => {
  const data = readFileSync(join(pathFiles, 'large.mzdata.xml'), 'utf8');
  let response = await parseMzData(data);

  expect(response.times).toHaveLength(3029);
  expect(response.series.ms.data).toHaveLength(3029);
  expect(response.series.ms.data[0][0]).toHaveLength(62);
  expect(response.series.ms.data[1][0]).toHaveLength(1);
  expect(response.series.ms.data[2][0]).toHaveLength(0);
});

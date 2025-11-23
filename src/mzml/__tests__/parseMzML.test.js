import { openAsBlob } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path';

import { describe, expect, it } from 'vitest';

import { parseMzML } from '../parseMzML';

const pathFiles = join(__dirname, 'data');

describe('parseMzML', () => {
  it('read tiny.mzML', async () => {
    const blob = await openAsBlob(join(pathFiles, 'tiny.mzML'));
    const arrayBuffer = await blob.arrayBuffer();

    let response = await parseMzML(arrayBuffer);
    expect(response.times).toStrictEqual([5.8905, 5.9905, 42.05]);
    expect(response.series.ms.data).toHaveLength(3);
    expect(response.series.ms.data[0][0]).toHaveLength(15);
    expect(response.series.ms.data[1][0]).toHaveLength(10);
    expect(response.series.ms.data[2][0]).toHaveLength(15);
  });

  it('read tiny.mzML as node blob', async () => {
    const blob = await readFile(join(pathFiles, 'tiny.mzML'));

    let response = await parseMzML(blob);
    expect(response.times).toStrictEqual([5.8905, 5.9905, 42.05]);
    expect(response.series.ms.data).toHaveLength(3);
    expect(response.series.ms.data[0][0]).toHaveLength(15);
    expect(response.series.ms.data[1][0]).toHaveLength(10);
    expect(response.series.ms.data[2][0]).toHaveLength(15);
  });

  it('read test.mzML', async () => {
    const blob = await openAsBlob(join(pathFiles, 'test.mzML'));
    const arrayBuffer = await blob.arrayBuffer();

    let response = await parseMzML(arrayBuffer);
    expect(response.times).toHaveLength(1500);
    expect(response.times.slice(0, 6)).toStrictEqual([
      0, 0.2, 0.4, 0.6, 0.8, 1,
    ]);
    expect(response.series.ms.data).toHaveLength(1500);
    expect(response.series.ms.data[0][0]).toHaveLength(336);
    expect(response.series.ms.data[1][0]).toHaveLength(465);
    expect(response.series.ms.data[2][0]).toHaveLength(465);
  });

  it('read compressed 32bits', async () => {
    const blob = await openAsBlob(join(pathFiles, 'small_zlib.pwiz.1.1.mzML'));
    const arrayBuffer = await blob.arrayBuffer();
    let response = await parseMzML(arrayBuffer);
    expect(response.times).toHaveLength(48);
    expect(response.times.slice(0, 6)).toStrictEqual([
      0.004935, 0.007896666666666666, 0.011218333333333334,
      0.022838333333333332, 0.034925, 0.04862,
    ]);
    expect(response.series.ms.data).toHaveLength(48);
    expect(response.series.ms.data[0][0]).toHaveLength(19914);
    expect(response.series.ms.data[1][0]).toHaveLength(19800);
    expect(response.series.ms.data[2][0]).toHaveLength(485);
  });
});

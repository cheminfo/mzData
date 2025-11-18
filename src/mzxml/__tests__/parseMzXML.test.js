import { readFileSync } from 'fs';
import { join } from 'path';

import { describe, expect, it } from 'vitest';

import { parseMzXML } from '../parseMzXML';

const pathFiles = join(__dirname, 'data');

describe('mzXML', () => {
  it('read 32 bits mzXML test file', async () => {
    const data = readFileSync(join(pathFiles, 'tiny2.0.mzXML'));
    const response = await parseMzXML(data);
    const scans = response.series.ms.data;
    const info = response.series.ms.info;
    const highMz = info[0].highMz;
    const lowMz = info[0].lowMz;
    const peaksCount0 = info[0].peaksCount;
    const peaksCount1 = info[1].peaksCount;
    const totIonCurrent0 = scans[0][1].reduce((a, b) => a + b);
    const totIonCurrent1 = scans[1][1].reduce((a, b) => a + b);
    const firstMz = scans[0][0];
    expect(firstMz[0]).toBeWithinRange(lowMz, highMz);
    expect(totIonCurrent0).toBeWithinRange(
      info[0].totIonCurrent - 50,
      info[0].totIonCurrent + 50,
    );
    expect(totIonCurrent1).toBeWithinRange(
      info[1].totIonCurrent - 50,
      info[1].totIonCurrent + 50,
    );
    expect(response.times).toStrictEqual([353.43, 356.68]);
    expect(scans).toHaveLength(2);
    expect(scans[0][0]).toHaveLength(peaksCount0);
    expect(scans[1][0]).toHaveLength(peaksCount1);
  });

  it.skip('read 32 bits mzXML compressed test file', async () => {
    const data = readFileSync(join(pathFiles, 'tiny3.0.mzXML'));
    const response = await parseMzXML(data);
    const scans = response.series.ms.data;
    const highMz = response.series.ms.info[0].highMz;
    const lowMz = response.series.ms.info[0].lowMz;
    const peaksCount0 = response.series.ms.info[0].peaksCount;
    const peaksCount1 = response.series.ms.info[1].peaksCount;
    const intensity = scans[0][1].reduce((a, b) => a + b);
    const mz = scans[0][0].reduce((a, b) => a + b) / scans[0][0].length;
    expect(mz).toBeWithinRange(lowMz, highMz);
    expect(mz).toBe(0);
    expect(response.series.ms.data[0][0]).toHaveLength(peaksCount0);
    expect(response.series.ms.data[1][0]).toHaveLength(peaksCount1);
    expect(intensity).toStrictEqual(-32);
    expect(response.times).toStrictEqual([353.43, 356.68]);
    expect(response.series.ms.data).toHaveLength(2);
    expect(response.series.ms.data[0][0]).toHaveLength(
      response.series.ms.info[0].peaksCount,
    );
    expect(response.series.ms.data[1][0]).toHaveLength(
      response.series.ms.info[1].peaksCount,
    );
    expect(response.series.ms.data[0][0][0]).toStrictEqual(-2);
    expect(response.series.ms.data[0][1][0]).toBe(0);
  });

  it('read 64 bits mzXML test file', async () => {
    const data = readFileSync(join(pathFiles, 'bigTest.mzXML'));
    const response = await parseMzXML(data);
    const scans = response.series.ms.data;
    const info = response.series.ms.info;
    const highMz = info[0].highMz;
    const lowMz = info[0].lowMz;
    const peaksCount0 = info[0].peaksCount;
    const peaksCount1 = info[1].peaksCount;
    const totIonCurrent0 = scans[0][1].reduce((a, b) => a + b);
    const firstMz = scans[0][0];
    expect(firstMz[0]).toBe(100);
    expect(firstMz[0]).toBeWithinRange(lowMz, highMz);
    expect(totIonCurrent0).toBe(295779);
    expect(scans).toHaveLength(12000);
    expect(scans[0][0]).toHaveLength(peaksCount0);
    expect(scans[1][0]).toHaveLength(peaksCount1);
  });
});

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

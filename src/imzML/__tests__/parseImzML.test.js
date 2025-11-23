import { openAsBlob } from 'fs';
import { join } from 'path';

import { expect, test } from 'vitest';

import { parseMzML } from '../../mzml/parseMzML.js';

const pathFiles = join(__dirname, 'data');

test('Small test', async () => {
  const blobIBD = await openAsBlob(join(pathFiles, 'test.ibd'));
  const ibd = await blobIBD.arrayBuffer();

  const blobIMZML = await openAsBlob(join(pathFiles, 'test.imzML'));
  const imzML = await blobIMZML.arrayBuffer();

  let response = await parseMzML(imzML, { rawData: ibd });

  expect(response.times).toHaveLength(15496);

  expect(response.series.ms.data).toHaveLength(15496);
  expect(response.series.ms.data[0][0]).toHaveLength(475);
  expect(response.series.ms.data[0][1]).toHaveLength(475);
  expect(response.series.ms.data[0]).toMatchSnapshot();
});

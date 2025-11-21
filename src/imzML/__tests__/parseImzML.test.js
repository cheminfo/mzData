import { openAsBlob, readFileSync } from 'fs';
import { join } from 'path';

import { expect, test } from 'vitest';

import { parseMzML } from '../../mzml/parseMzML.js';

const pathFiles = join(__dirname, 'data');

test('Small test', async () => {
  const blobIBD = await openAsBlob(join(pathFiles, 'test.ibd'));
  const ibd = await blobIBD.arrayBuffer();

  const blobIMZML = await openAsBlob(join(pathFiles, 'test.imzML'));
  const imzML = await blobIMZML.arrayBuffer();

  for (let i = 0; i < 10; i++) {
    let response = await parseMzML(imzML, { rawData: ibd });
  }

  // console.log(response);
});

// need to `npm run prepack`
// need a 'huge.mzML' file in the same folder

import { openAsBlob } from 'fs';
import { join } from 'path';

import { parseMZ } from '../lib/index.js';

const xml = await openAsBlob(join(import.meta.dirname, 'huge.mzML'));

const arrayBuffer = await xml.arrayBuffer();
console.log(arrayBuffer.byteLength);
let start = Date.now();

const result = await parseMZ(arrayBuffer);

console.log(Date.now() - start);

console.log(Object.keys(result));

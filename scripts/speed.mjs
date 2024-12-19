// need to `npm run prepack`
// need a 'huge.mzML' file in the same folder

import { readFile } from 'fs/promises';

import { parseMZ } from '../src/index.js';

const xml = await readFile(new URL('huge.mzML', import.meta.url));

let start = Date.now();

const result = await parseMZ(xml);

console.log(Date.now() - start);

console.log(Object.keys(result));

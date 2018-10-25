import {readFileSync} from 'fs';
import {join} from 'path';
import mzData from '../src';

let xml = readFileSync(
    join(__dirname, '../testFiles/mzData/3-28-5.mzdata.xml')
);

let start = Date.now();
for (let i = 0; i < 10; i++) {
    mzData(xml);
}

console.log(Date.now() - start);

const readFileSync = require('fs').readFileSync;
const join = require('path').join;
const mzData = require('../src');

let xml = readFileSync(
  join(__dirname, '../testFiles/mzData/3-28-5.mzdata.xml'),
  'utf8'
);

let start = Date.now();
for (let i = 0; i < 10; i++) {
  mzData(xml);
}

console.log(Date.now() - start);

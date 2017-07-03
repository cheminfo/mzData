# mzMLjs

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![Test coverage][codecov-image]][codecov-url]
  [![npm download][download-image]][download-url]

Read and explore mzML files.

## Installation

`$ npm install --save mzmjs`

## Usage

```js
import {mzData} from 'mzmjs';

// mzData files
const mzDataFile = readFileSync(__dirname + '/tiny.mzData.xml');
var response = mzData(mzDataFile);
```

## [API Documentation](https://cheminfo-js.github.io/mzMLjs/)

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/mzmjs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mzmjs
[travis-image]: https://img.shields.io/travis/cheminfo-js/mzMLjs/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/mzMLjs
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo-js/mzMLjs.svg?style=flat-square
[codecov-url]: https://codecov.io/github/cheminfo-js/mzMLjs
[download-image]: https://img.shields.io/npm/dm/mzmjs.svg?style=flat-square
[download-url]: https://npmjs.org/package/mzmjs

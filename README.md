# History of formats

https://dx.doi.org/10.1074/mcp.R110.000133

- mzData was developed by HUPO-PSI
  - http://psidev.info/index.php?qnode/80#mzdata
  - https://doi.org/10.1002/pmic.200300588
- mzXML was developed at the Institute for Systems Biology
- mzML: new unified output format started in 2006

mzML - 4 goals:

- creation of a simple format
- elimination of alternate ways to encode the same information
- support for all the features of both mzXML and mzData
- validation through implementation prior to release.

![mzml](images/mzml.png)

cv = Controlled Volabulatry

# mzData

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Read and explore xml files used to encode mass spectra.

This includes:

- mzData
- mzML
- mzXML

## Installation

`$ npm install --save mzdata`

## Usage

```js
import { parseMZ } from 'mzdata';

// mzData files
const mzDataFile = readFileSync(__dirname + '/tiny.mzData.xml');
var response = parseMZ(mzDataFile);
```

## Ontology

[Ontology](./ontology.md)

## More examples

You can find various examples files at:

http://www.psidev.info/mzML

## [API Documentation](https://cheminfo-js.github.io/mzData/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/mzdata.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mzdata
[travis-image]: https://img.shields.io/travis/cheminfo-js/mzData/main.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/mzData
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo-js/mzData.svg?style=flat-square
[codecov-url]: https://codecov.io/github/cheminfo-js/mzData
[download-image]: https://img.shields.io/npm/dm/mzdata.svg?style=flat-square
[download-url]: https://npmjs.org/package/mzdata

import { decode } from 'uint8-base64';

import { inflate } from './inflate.js';

export async function decodeData(data, options = {}) {
  if (!(data instanceof Uint8Array)) {
    throw new TypeError('data should be an Uint8Array');
  }
  let {
    endian = 'little',
    precision,
    float = true,
    compression = '',
    base64 = true,
    ontologies = {},
  } = options;

  if ('MS:1000519' in ontologies) {
    precision = 32;
    float = false;
  }
  if ('MS:1000520' in ontologies) precision = 16;
  if ('MS:1000521' in ontologies) precision = 32;
  if ('MS:1000522' in ontologies) {
    float = false;
    precision = 64;
  }
  if ('MS:1000523' in ontologies) precision = 64;
  if ('MS:1000574' in ontologies) compression = 'zlib';

  if (base64) {
    data = decode(data);
  }

  switch (compression.toLowerCase()) {
    case 'zlib':
      data = await inflate(data);
      break;
    case '':
    case 'none':
      break;
    default:
      throw new Error(`Unknown compression algorithm: ${compression}`);
  }

  switch (endian.toLowerCase()) {
    case 'little':
      break;
    case 'network':
    case 'big':
      {
        // we will invert in place the data
        let step;
        switch (precision) {
          case 32:
            step = 4;
            break;
          case 64:
            step = 8;
            break;
          default:
            throw new Error('Can not process bigendian file');
        }
        for (let i = 0; i < data.length - (data.length % step); i += step) {
          for (let j = 0; j < step / 2; j++) {
            const temp = data[i + j];
            data[i + j] = data[i + step - 1 - j];
            data[i + step - 1 - j] = temp;
          }
        }
      }
      break;
    default:
      throw new TypeError(`Attributes endian not correct: ${endian}`);
  }

  /*
       We should take care that the length of the Uint8Array is correct but the buffer
       may be a little bit bigger because when decoding base 64 it may end with = or ==
       and we plan the size in the buffer.
      */

  if (float) {
    switch (precision) {
      case 32:
        return new Float32Array(
          data.buffer,
          data.byteOffset,
          data.byteLength / Float32Array.BYTES_PER_ELEMENT,
        );
      case 64:
        return new Float64Array(
          data.buffer,
          data.byteOffset,
          data.byteLength / Float64Array.BYTES_PER_ELEMENT,
        );

      default:
        throw new TypeError(`Incorrect precision: ${precision}`);
    }
  } else {
    switch (precision) {
      case 32:
        return new Int32Array(
          data.buffer,
          data.byteOffset,
          data.byteLength / Int32Array.BYTES_PER_ELEMENT,
        );
      case 64:
        return new BigInt64Array(
          data.buffer,
          data.byteOffset,
          data.byteLength / BigInt64Array.BYTES_PER_ELEMENT,
        );
      default:
        throw new TypeError(`Incorrect precision: ${precision}`);
    }
  }
}

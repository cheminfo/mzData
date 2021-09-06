import { decode } from 'uint8-base64';

export function decodeBase64(base64, options = {}) {
  const { endian, precision } = options;

  if (endian.toLowerCase() !== 'little') {
    throw new TypeError(`Attributes endian not correct: ${endian}`);
  }
  const uint8Array = decode(base64);
  /*
       We should take care that the length of the Uint8Array is correct but the buffer
       may be a little bit bigger because when decoding base 64 it may end with = or ==
       and we plan the size in the buffer.
      */
  switch (precision) {
    case 64:
      return new Float64Array(uint8Array.buffer, 0, uint8Array.length / 8);
    case 32:
      return new Float32Array(uint8Array.buffer, 0, uint8Array.length / 4);
    default:
      throw new TypeError(`Incorrect precision: ${precision}`);
  }
}

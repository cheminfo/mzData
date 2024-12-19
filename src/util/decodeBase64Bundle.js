export async function decodeBase64(base64, options = {}) {
  const base64codes = Uint8Array.from([
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255,
    255, 255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255,
    255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 51,
  ]);
  /**
   * Convert a Uint8Array containing a base64 encoded bytes to a Uint8Array containing decoded values
   * @returns a Uint8Array containing the decoded bytes
   */
  function decode(input) {
    if (!ArrayBuffer.isView(input)) {
      input = new Uint8Array(input);
    }
    if (input.length % 4 !== 0) {
      throw new Error('Unable to parse base64 string.');
    }
    let output = new Uint8Array(3 * (input.length / 4));
    if (input.length === 0) {
      return output;
    }
    const missingOctets =
      input[input.length - 2] === 61
        ? 2
        : input[input.length - 1] === 61
          ? 1
          : 0;
    for (let i = 0, j = 0; i < input.length; i += 4, j += 3) {
      const buffer =
        (base64codes[input[i]] << 18) |
        (base64codes[input[i + 1]] << 12) |
        (base64codes[input[i + 2]] << 6) |
        base64codes[input[i + 3]];
      output[j] = buffer >> 16;
      output[j + 1] = (buffer >> 8) & 0xff;
      output[j + 2] = buffer & 0xff;
    }
    return output.subarray(0, output.length - missingOctets);
  }

  Uint8Array.from([
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
    107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
    122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47,
  ]);

  async function inflate(zlibCompressedData) {
    const inputStream = new ReadableStream({
      start(controller) {
        controller.enqueue(zlibCompressedData);
        controller.close();
      },
    });

    const decompressedStream = inputStream.pipeThrough(
      new DecompressionStream('deflate'),
    );

    const reader = decompressedStream.getReader();
    const chunks = [];
    let totalLength = 0;

    while (true) {
      // eslint-disable-next-line no-await-in-loop
      const { value, done } = await reader.read();
      if (done) break;
      chunks.push(value);
      totalLength += value.length;
    }

    // Combine chunks into a single Uint8Array
    const decompressedData = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
      decompressedData.set(chunk, offset);
      offset += chunk.length;
    }

    return decompressedData;
  }

  let {
    endian = 'little',
    precision,
    float = true,
    compression = '',
    ontologies,
  } = options;

  if (ontologies) {
    if (ontologies.includes('MS:1000519')) {
      precision = 32;
      float = false;
    }
    if (ontologies.includes('MS:1000520')) precision = 16;
    if (ontologies.includes('MS:1000521')) precision = 32;
    if (ontologies.includes('MS:1000522')) {
      float = false;
      precision = 64;
    }
    if (ontologies.includes('MS:1000523')) precision = 64;
    if (ontologies.includes('MS:1000574')) compression = 'zlib';
  }

  let uint8Array = decode(base64);
  switch (compression.toLowerCase()) {
    case 'zlib':
      uint8Array = await inflate(uint8Array);
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
        for (
          let i = 0;
          i < uint8Array.length - (uint8Array.length % step);
          i += step
        ) {
          for (let j = 0; j < step / 2; j++) {
            const temp = uint8Array[i + j];
            uint8Array[i + j] = uint8Array[i + step - 1 - j];
            uint8Array[i + step - 1 - j] = temp;
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
        return new Float32Array(uint8Array.buffer, 0, uint8Array.length / 4);
      case 64:
        return new Float64Array(uint8Array.buffer, 0, uint8Array.length / 8);
      default:
        throw new TypeError(`Incorrect precision: ${precision}`);
    }
  } else {
    switch (precision) {
      case 32:
        return new Int32Array(uint8Array.buffer, 0, uint8Array.length / 4);
      case 64:
        return new BigInt64Array(uint8Array.buffer, 0, uint8Array.length / 8);
      default:
        throw new TypeError(`Incorrect precision: ${precision}`);
    }
  }
}

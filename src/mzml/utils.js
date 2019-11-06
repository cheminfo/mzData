import pako from 'pako';
import { decode } from 'base64-arraybuffer';

export function decoder(base64Encoded, options = {}) {
  const { compressionAlgorithm } = options;
  let decoded;
  switch (compressionAlgorithm) {
    case 'zlib':
      decoded = pako.deflate(decode(base64Encoded));
      break;
    case undefined:
    case '':
      decoded = decode(base64Encoded);
      break;
    default:
      throw new Error(
        `utils.decoder: unknown compression: ${compressionAlgorithm}`,
      );
  }
  if (!decoded.byteLength % 8) {
    throw new Error('decode to Float64Array not the right length');
  }
  return new Float64Array(decoded);
}

export function formatResult(spectra) {
  let result = {
    times: [],
    series: {
      ms: {
        data: [],
        dimensions: 2,
      },
    },
  };
  for (let index in spectra) {
    let element = spectra[index];
    if (element.time && element.mass && element.intensity) {
      result.times.push(Number(element.time));
      result.series.ms.data.push([element.mass, element.intensity]);
    }
  }
  return result;
}

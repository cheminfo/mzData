// Every payload is its own zlib stream, so they cannot be batched. What is
// controllable is how each one is driven, and how many run at once: feeding the
// transform directly avoids the pipeThrough machinery, and a bound keeps
// thousands of in-flight streams from swamping the heap.
const MAX_IN_FLIGHT = 256;
let inFlight = 0;
const waiting = [];

/**
 * Inflate a zlib stream with the platform decompressor.
 * @param {Uint8Array} zlibCompressedData - the compressed bytes.
 * @returns {Promise<Uint8Array>} the inflated bytes.
 */
export async function inflate(zlibCompressedData) {
  if (inFlight >= MAX_IN_FLIGHT) {
    await new Promise((resolve) => {
      waiting.push(resolve);
    });
  }
  inFlight++;
  try {
    return await inflateOne(zlibCompressedData);
  } finally {
    inFlight--;
    waiting.shift()?.();
  }
}

/**
 * Drive one DecompressionStream directly, without pipeThrough.
 * @param {Uint8Array} zlibCompressedData - the compressed bytes.
 * @returns {Promise<Uint8Array>} the inflated bytes.
 */
async function inflateOne(zlibCompressedData) {
  const stream = new DecompressionStream('deflate');
  const writer = stream.writable.getWriter();
  void writer.write(zlibCompressedData);
  void writer.close();

  const reader = stream.readable.getReader();
  const chunks = [];
  let totalLength = 0;
  for (;;) {
    // eslint-disable-next-line no-await-in-loop -- a stream is read sequentially
    const { value, done } = await reader.read();
    if (done) break;
    chunks.push(value);
    totalLength += value.length;
  }
  if (chunks.length === 1) return chunks[0];

  const decompressedData = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    decompressedData.set(chunk, offset);
    offset += chunk.length;
  }
  return decompressedData;
}

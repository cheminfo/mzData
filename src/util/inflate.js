export async function inflate(zlibCompressedData) {
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

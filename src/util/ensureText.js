export function ensureText(data, options = {}) {
  const { encoding = 'utf8' } = options;
  if (Buffer && data instanceof Buffer) {
    return data.toString(encoding);
  }
  if (ArrayBuffer && data instanceof ArrayBuffer) {
    return new TextDecoder(encoding).decode(data);
  }
  return data;
}

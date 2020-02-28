export function ensureText(data, options = {}) {
  const { encoding = 'utf8' } = options;
  if (typeof Buffer !== 'undefined' && data instanceof Buffer) {
    return data.toString(encoding);
  }
  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return new TextDecoder(encoding).decode(data);
  }
  return data;
}

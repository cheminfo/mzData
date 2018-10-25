'use strict';

function ensureTextBrowser(data) {
  if (ArrayBuffer.isView(data)) {
    // eslint-disable-next-line no-undef
    return new TextDecoder('utf8').decode(data);
  }
  return data;
}

module.exports = ensureTextBrowser;

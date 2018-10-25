'use strict';

function ensureText(data) {
  if (data instanceof Buffer) {
    return data.toString('utf8');
  }
  return data;
}

module.exports = ensureText;

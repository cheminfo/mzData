import { parseMzData } from './mzdata/parseMzData.js';
import { parseMzML } from './mzml/parseMzML.js';
import { parseMzXML } from './mzxml/parseMzXML.js';

const decoder = new TextDecoder();

/**
 * Reads a mzData v1.05 file
 * @param {ArrayBuffer|string} xml - ArrayBuffer or String or any Typed Array (including Node.js' Buffer from v4) with the data
 * @param {import('./Options.js').Options} [options={}]
 * @return Promise<{{times: Array<number>, series: { ms: { data:Array<Array<number>>}}}}>
 */
export async function parseMZ(xml, options = {}) {
  if (typeof xml === 'string') {
    const encoder = new TextEncoder();
    xml = encoder.encode(xml);
  }

  if (!ArrayBuffer.isView(xml)) {
    xml = new Uint8Array(xml);
  }

  const header = xml.subarray
    ? decoder.decode(xml.subarray(0, 200))
    : xml.substring(0, 200);

  if (header.includes('mzData')) {
    return parseMzData(xml, options);
  } else if (header.includes('mzML')) {
    return parseMzML(xml, options);
  } else if (header.includes('mzXML')) {
    return parseMzXML(xml, options);
  } else {
    throw new Error(`MZ parser: unknown format`);
  }
}

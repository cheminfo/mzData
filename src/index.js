import { parseMzData } from './mzdata/parseMzData';
import { parseMzML } from './mzml/parseMzML';
import { parseMzXML } from './mzxml/parseMzXML';

const decoder = new TextDecoder();
const encoder = new TextEncoder();

/**
 * Reads a mzData v1.05 file
 * @param {ArrayBuffer|string} xml - ArrayBuffer or String or any Typed Array (including Node.js' Buffer from v4) with the data
 * @return {{times: Array<number>, series: { ms: { data:Array<Array<number>>}}}}
 */
export function parseMZ(xml) {
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
    return parseMzData(xml);
  } else if (header.includes('mzML')) {
    return parseMzML(xml);
  } else if (header.includes('mzXML')) {
    return parseMzXML(xml);
  } else {
    throw new Error(`MZ parser: unknown format`);
  }
}

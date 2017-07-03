import {parser} from 'sax';
import {decoder, mergeSeries} from './utils';

/**
 * Reads a mzData v1.05 file
 * @param {ArrayBuffer} data - ArrayBuffer or any Typed Array (including Node.js' Buffer from v4) with the data
 * @return {{times: Array<number>, series: { ms:Array<Array<number>>}}}
 */
export function mzData(data) {
    const xml = parser(true, {trim: true});

    var result = {
        times: [],
        series: {}
    };
    var error = [];
    var binaryData = {};
    var mz = [];
    var int = [];
    var kind;

    xml.onopentag = (node) => {
        // eslint-disable-next-line default-case
        switch (node.name) {
            case 'mzData':
                kind = 'mzData';
                break;
            case 'cvParam':
                if (node.attributes.name === 'TimeInMinutes') {
                    result.times.push(Number(node.attributes.value));
                }
                break;
            case 'mzArrayBinary':
                binaryData = {
                    serie: 'mz'
                };
                break;
            case 'intenArrayBinary':
                binaryData = {
                    serie: 'int'
                };
                break;
            case 'data':
                if (binaryData.serie === 'mz') {
                    binaryData = node.attributes;
                    binaryData.serie = 'mz';
                } else if (binaryData.serie === 'int') {
                    binaryData = node.attributes;
                    binaryData.serie = 'int';
                }
                break;
        }
    };

    xml.ontext = (raw) => {
        if (binaryData.serie === 'mz') {
            mz.push(decoder(raw, binaryData));
        } else if (binaryData.serie === 'int') {
            int.push(decoder(raw, binaryData));
        }
        binaryData = {};
    };

    xml.onerror = (err) => error.push(err);
    xml.write(data).close();
    if (!kind || kind !== 'mzData') {
        throw new TypeError('Not a mzData file');
    }
    if (error.length > 0) {
        throw new Error(error);
    }

    result.series.ms = mergeSeries(mz, int);
    return result;
}

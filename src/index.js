import {parser} from 'sax';
import {decoder, mergeSeries} from './utils';

/**
 * Reads a mzData v1.05 file
 * @param {ArrayBuffer} data - ArrayBuffer or any Typed Array (including Node.js' Buffer from v4) with the data
 * @return {{times: Array<number>, series: { ms: { data:Array<Array<number>>}}}}
 */
export default function mzData(data) {
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
                if (node.isSelfClosing) {
                    if (binaryData.serie === 'mz') {
                        mz.push([]);
                    } else if (binaryData.serie === 'int') {
                        int.push([]);
                    }
                    binaryData = {};
                } else if (binaryData.serie) {
                    binaryData.precision = node.attributes.precision;
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

    result.series.ms = {};
    result.series.ms.data = mergeSeries(mz, int);
    return result;
}

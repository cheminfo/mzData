import {toByteArray} from 'base64-js';

export function decoder(encoded, options) {
    var buffer = toByteArray(encoded);
    if (options.precision === '64') {
        return new Float64Array(buffer.buffer);
    } else {
        return new Float32Array(buffer.buffer);
    }
}

export function mergeSeries(first, second) {
    var ans = new Array(first.length);
    for (var i = 0; i < ans.length; i++) {
        ans[i] = [first[i], second[i]];
    }
    return ans;
}

import {toByteArray} from 'base64-js';

export function decoder(encoded, options) {
    var buffer = toByteArray(encoded);
    var float;
    if (options.precision === '64') {
        float = new Float64Array(buffer.buffer);
    } else {
        float = new Float32Array(buffer.buffer);
    }
    return Array.from(float);
}

export function mergeSeries(first, second) {
    var ans = first.slice();
    for (var i = 0; i < ans.length; i++) {
        ans[i] = [first[i], second[i]];
    }
    return ans;
}

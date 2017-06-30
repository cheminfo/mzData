import {mzData} from '..';
import {readFileSync} from 'fs';
const pathFiles = __dirname + '/../../testFiles/';

describe('mzData', () => {
    it('read tiny.mzData.xml', () => {
        const data = readFileSync(pathFiles + 'tiny.mzData.xml');
        var response = mzData(data);
        expect(response.kind).toBe('mzData');
        expect(response.times).toEqual([5.8905, 5.944667]);
        expect(response.series.ms.length).toBe(2);
        expect(response.series.ms[0][0].length).toBe(1313);
        expect(response.series.ms[1][0].length).toBe(43);
    });
});

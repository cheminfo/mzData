import mzData from '..';
import {readFileSync} from 'fs';
const pathFiles = __dirname + '/../../testFiles/mzData/';

describe('mzData', () => {
    it('read tiny.mzData.xml', () => {
        const data = readFileSync(pathFiles + 'tiny.mzData.xml');
        var response = mzData(data);
        expect(response.times).toEqual([5.8905, 5.944667]);
        expect(response.series.ms.data.length).toBe(2);
        expect(response.series.ms.data[0][0].length).toBe(1313);
        expect(response.series.ms.data[1][0].length).toBe(43);
    });

    it('read real file', () => {
        const data = readFileSync(pathFiles + '3-28-5.mzdata.xml');
        var response = mzData(data);
        expect(response.times.length).toBe(3029);
        expect(response.series.ms.data.length).toBe(3029);
        expect(response.series.ms.data[0][0].length).toBe(62);
        expect(response.series.ms.data[1][0].length).toBe(1);
        expect(response.series.ms.data[2][0].length).toBe(0);
    });
});

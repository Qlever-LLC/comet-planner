// tests/index.test.ts

import { readExcelData } from '../src/index';

describe('readExcelData', () => {
    it('should return a JSON object', () => {
        const result = readExcelData("/root/");
        expect(result[0]).toEqual(expect.objectContaining({ name: "servio", lastName: "palacios" }));
    });
});

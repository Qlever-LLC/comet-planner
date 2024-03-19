// tests/index.test.ts

import { getCometRecords } from '../src/index';

describe('getCometRecords', () => {
    it('should return an array of JSON objects for state, county, and class', () => {
        const result = getCometRecords("AL", "Autauga", "Cropland Management");
        console.log(`--> value ${result[0].state} -- ${result[0].county} -- ${result[0].class}`);
        expect(result[0].state).toEqual("AL");
        expect(result[0].county).toEqual("Autauga");
        expect(result[0].class).toEqual("Cropland Management");
    });
});

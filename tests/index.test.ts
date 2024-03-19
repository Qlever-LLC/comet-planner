// tests/index.test.ts

import { getCometRecords } from '../src/index';

describe('getCometRecords for AL', () => {
    it('should return an array of JSON objects for state, county, and class', async () => {
        const result = await getCometRecords("AL", "Autauga", "Cropland Management");
        expect(result[0].state).toEqual("AL");
        expect(result[0].county).toEqual("Autauga");
        expect(result[0].class).toEqual("Cropland Management");
    });

    it('should return an empty array of JSON objects for non existent state, county, and class ', async () => {
        const result = await getCometRecords("AL", "DoesNotExist", "Cropland Management");
        expect(result).toEqual([]);
    });
});


describe('Non Existent State', () => {
    it('should return an empty array of JSON objects for non existent state, county, and class ', async () => {
        const result = await getCometRecords("XYZ", "DoesNotExist", "Cropland Management");
        expect(result).toEqual([]);
    });
});

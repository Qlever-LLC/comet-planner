// tests/index.test.ts

import { getCometRecords, State } from '../src/index';

describe('getCometRecords for AL', () => {
    it('should return an array of JSON objects for state, county, and class', async () => {
        const result = await getCometRecords(State.Alabama, "Autauga", "Cropland Management");
        expect(result[0].state).toEqual(State.Alabama);
        expect(result[0].county).toEqual("Autauga");
        expect(result[0].class).toEqual("Cropland Management");
    });

    it('should return an empty array of JSON objects for non existent state, county, and class ', async () => {
        const result = await getCometRecords(State.Alabama, "DoesNotExist", "Cropland Management");
        expect(result).toEqual([]);
    });
});


describe('getCometRecords for AR', () => {
    it('should return an array of JSON objects for state, county, and class', async () => {
        const result = await getCometRecords(State.Arkansas, "Arkansas", "Cropland Management");
        expect(result[0].state).toEqual(State.Arkansas);
        expect(result[0].county).toEqual("Arkansas");
        expect(result[0].class).toEqual("Cropland Management");
    });

    it('should return an empty array of JSON objects for non existent state, county, and class ', async () => {
        const result = await getCometRecords(State.Arkansas, "DoesNotExist", "Cropland Management");
        expect(result).toEqual([]);
    });
});


describe('Non Existent State', () => {
    it('should return an empty array of JSON objects for non existent state, county, and class ', async () => {
        const result = await getCometRecords("XYZ", "DoesNotExist", "Cropland Management");
        expect(result).toEqual([]);
    });
});

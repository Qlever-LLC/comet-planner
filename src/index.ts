// src/index.ts
import * as xlsx from 'xlsx';
import * as path from 'path';
import * as AL from '../data/AL.json'; // test for state

// an interface for the CometRecord
interface CometRecord {
    state: string;
    county: string;
    class: string;
    fipsint: number;
    mlra: string;
    lrr: string;
    cpsnum: number;
    cps_name: string;
    planner_implementation: string;
    n: number;
    lrr_fill: number;
    co2_mean: number;
    co2_sterr: number;
    n2o_mean: number;
    n2o_sterr: number;
    ch4_mean: number;
    ch4_sterr: number;
    soil_carbon_co2: number;
    soil_carbon_co2_sterr: number;
    biomass_co2: number;
    fossil_co2: number;
    drainedorganicsoils_co2: number;
    biomass_burning_co2: number;
    biomassburning_n2o: number;
    biomassburning_ch4: number;
    liming_co2: number;
    direct_soil_n2o: number;
    direct_soil_n2o_sterr: number;
    indirect_soil_n2o: number;
    indirect_soil_n2o_sterr: number;
    drainedorganicsoils_n2o: number;
    soil_ch4: number;
    total_ghg_co2: number;
    total_ghg_co2_sterr: number;
    total_ghg_co2_min: number;
    total_ghg_co2_max: number;
}// Interface

class InMemoryIndex {
    private index: { [key: string]: CometRecord[] };

    constructor() {
        this.index = {};
    }

    addToIndex(record: CometRecord) {
        const key = `${record.county}_${record.class}`;
        if (!this.index[key]) {
            this.index[key] = [];
        }
        this.index[key].push(record);
    }

    search(county: string, class1: string): CometRecord[] {
        const key = `${county}_${class1}`;
        return this.index[key] || [];
    }
}//InMemoryIndex

const index = new InMemoryIndex();

for (const key in AL) {
    index.addToIndex(<CometRecord>AL[key]);
}

let _value = index.search("Autauga", "Cropland Management");
console.log(`--> value ${_value[0].state} -- ${_value[0].county} -- ${_value[0].class}`);

/**
 * Creates an Index per State, then it returns a set of records
 * for the search State, County, and Class
 * @param state 
 * @param county 
 * @param class1 
 * @returns 
 */
export function getCometRecords(state: string, county: string, class1: string): CometRecord[] {
    return [];
}

/**
 * Reads and parses an Excel file to extract the records
 * @param filePath 
 * @returns 
 */
export function readExcelData(filePath: string): Record<string, any>[] {
    const _datum = { name: "servio", lastName: "palacios" };
    let _data: Record<string, any>[] = [];
    _data.push(_datum);
    return _data;
}





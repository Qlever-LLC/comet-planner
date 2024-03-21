// src/index.ts
import axios from 'axios';

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

export enum State {
    Alabama = 'AL',
    Alaska = 'AK',
    Arizona = 'AZ',
    Arkansas = 'AR',
    California = 'CA',
    Colorado = 'CO',
    Connecticut = 'CT',
    Delaware = 'DE',
    Florida = 'FL',
    Georgia = 'GA',
    Hawaii = 'HI',
    Idaho = 'ID',
    Illinois = 'IL',
    Indiana = 'IN',
    Iowa = 'IA',
    Kansas = 'KS',
    Kentucky = 'KY',
    Louisiana = 'LA',
    Maine = 'ME',
    Maryland = 'MD',
    Massachusetts = 'MA',
    Michigan = 'MI',
    Minnesota = 'MN',
    Mississippi = 'MS',
    Missouri = 'MO',
    Montana = 'MT',
    Nebraska = 'NE',
    Nevada = 'NV',
    NewHampshire = 'NH',
    NewJersey = 'NJ',
    NewMexico = 'NM',
    NewYork = 'NY',
    NorthCarolina = 'NC',
    NorthDakota = 'ND',
    Ohio = 'OH',
    Oklahoma = 'OK',
    Oregon = 'OR',
    Pennsylvania = 'PA',
    RhodeIsland = 'RI',
    SouthCarolina = 'SC',
    SouthDakota = 'SD',
    Tennessee = 'TN',
    Texas = 'TX',
    Utah = 'UT',
    Vermont = 'VT',
    Virginia = 'VA',
    Washington = 'WA',
    WestVirginia = 'WV',
    Wisconsin = 'WI',
    Wyoming = 'WY'
}

// Check for States, Validate those values
// Check for No Data stuff, perhaps undefined
// Include More Test Cases
// Validate the dataset so that there is no unexpected characters in there
class DataRepository {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async queryData(state: string, county: string, class1: string): Promise<CometRecord[]> {
        const _url = `${this.baseUrl}/${state}.json`;

        try {
            const response = await axios.get(_url);
            // Filter the data based on county and class1
            const data = response.data.filter((item: any) => item.county === county && item.class === class1);
            return data;
        } catch (error) {
            //console.error('Error querying data:', error);
            return []; // Return empty array in case of error
        }
    }
}//DataRepository

// Example usage:
// The Path can be configured. add a tool to config this parameter or add a yaml file
const repository = new DataRepository('https://raw.githubusercontent.com/Qlever-LLC/comet-planner/main/datasource');
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

// const index = new InMemoryIndex();

// for (const key in AL) {
//     index.addToIndex(<CometRecord>AL[key]);
// }

/**
 * Creates an Index per State, then it returns a set of records
 * for the search State, County, and Class
 * @param state 
 * @param county 
 * @param class1 
 * @returns 
 */
export async function getCometRecords(state: string, county: string, class1: string): Promise<CometRecord[]> {
    return await repository.queryData(state, county, class1);
}

/**
 * Reads and parses an Excel file to extract the records
 * @param filePath 
 * @returns 
 */
export function readExcelData(filePath: string): Record<string, any>[] {
    const _datum = { name: "name", lastName: "lastname" };
    let _data: Record<string, any>[] = [];
    _data.push(_datum);
    return _data;
}





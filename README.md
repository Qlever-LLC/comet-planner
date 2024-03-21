# comet-planner Documentation

## Introduction

comet-planner is a library that consolidates the work of comet-planner.com into a library.
This library is based on the work of [comet-planner.com](http://comet-planner.com/). Visit their website for more information.

### Features

The Comet Planner library provides access to datasets supplied in different JSON files, with each file containing data for a specific state. The library allows users to retrieve the specific file needed and filter out information based on parameters such as county, class, and practice implementation.

#### Features

* State-specific Datasets: Data for each state is stored in separate JSON files, making it easy to access and manage state-specific information.
* Flexible Filtering: Users can filter the dataset based on various parameters such as county, class, and practice implementation to retrieve relevant information.
* Easy Integration: The library can be easily integrated into existing projects, enabling developers to leverage state-specific data for analysis and decision-making.

## Installation

You can install the library via npm or yarn:

```bash
yarn add comet-planner
```

### Usage

```typescript
// Example usage
import { CometPlanner } from 'comet-planner';

const planner = new CometPlanner();

// Retrieve data for a specific state
const result = await planner.getCometRecords("AL", "Autauga", "Cropland Management");
```

## Dataset

The library utilizes The Comet Planner dataset. The following represents a brief analysis of the data.

### Total Records per State

<img src="https://raw.githubusercontent.com/Qlever-LLC/comet-planner/main/images/total_records_per_state.png" align="middle">

### Total Counties per State

<img src="https://raw.githubusercontent.com/Qlever-LLC/comet-planner/main/images/counties_per_state.png" align="middle">

## Testing the library

```bash
 yarn run test                                                                                                                                                                                     21.03.24    16:59:04  
yarn run v1.22.17
$ jest
 PASS  tests/index.test.ts (5.35 s)
  getCometRecords for AL
    ✓ should return an array of JSON objects for state, county, and class (1181 ms)
    ✓ should return an empty array of JSON objects for non existent state, county, and class  (646 ms)
  getCometRecords for AR
    ✓ should return an array of JSON objects for state, county, and class (1449 ms)
    ✓ should return an empty array of JSON objects for non existent state, county, and class  (793 ms)
  Non Existent State
    ✓ should return an empty array of JSON objects for non existent state, county, and class  (463 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        5.387 s
Ran all test suites.
✨  Done in 5.98s.
```

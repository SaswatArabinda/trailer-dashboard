import { createStore } from "redux"; 
import {reducer} from '../reducers/index.js';
import data from '../data';

let results = data[1], arrResults = [];

Object.keys(results).forEach(function (key) {
    arrResults.push(results[key]);
});
let initialValue = {
    languages: data[0],
    allResults: arrResults,
    results: arrResults,
    activeIndex: -1,
    languageFilter: []
}

// let store = createStore(reducer, initialValue);

export let store = createStore(reducer, initialValue);
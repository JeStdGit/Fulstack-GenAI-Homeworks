import { getRandomInteger } from '../utils.js';

const first = getRandomInteger()
const second = getRandomInteger()

console.log(`first: ${first}, second: ${second}`);


if (second > first) console.log("Growing...");
else console.log(":/");


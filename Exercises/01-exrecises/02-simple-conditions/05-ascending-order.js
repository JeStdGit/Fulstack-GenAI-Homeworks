import { getRandomInteger } from "../utils.js";

const first = getRandomInteger(1, 10)
const second = getRandomInteger(1, 10)

console.log(`first: ${first}, second: ${second}`);

if (first != second) console.log(`${first}, ${second}`);
else console.log(`${Math.min(first, second)}, ${Math.max(first, second)}`);
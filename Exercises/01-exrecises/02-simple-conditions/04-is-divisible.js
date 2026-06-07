import { getRandomInteger } from "../utils.js";

const first = getRandomInteger()
const second = getRandomInteger()

console.log(`first: ${first}, second: ${second}`);

if (first % second == 0) {
    console.log(`${first} is divisible by ${second}`);
} else console.log(`${first} is not divisible by ${second}`);

if (second % first == 0) {
    console.log(`${second} is divisible by ${first}`);
} else console.log(`${first} is not divisible by ${second}`);
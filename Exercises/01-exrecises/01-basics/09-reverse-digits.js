import { getRandomInteger } from '../utils.js';

const digits = getRandomInteger(10, 99)
console.log("digits:", digits);

const reversed = digits % 10 * 10 + Math.floor(digits / 10)

console.log("reversed digits:", reversed);

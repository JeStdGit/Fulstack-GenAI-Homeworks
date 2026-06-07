import { getRandomNumber } from '../utils.js';

const number = getRandomNumber(100, 999)
console.log("entered number:", number);

console.log("hundreds:", number % 100);

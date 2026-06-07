import { getRandomNumber } from '../utils.js';

const number = getRandomNumber(1000, 9999)
console.log("entered number:", number);

console.log("second right:", Math.floor(number % 100 / 10));

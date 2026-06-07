import { getRandomNumber } from '../utils.js'

const digits = getRandomNumber(10, 20)
console.log("digits", digits);

const sum = digits % 10 + Math.floor(digits / 10)

console.log("sum digits:", sum);

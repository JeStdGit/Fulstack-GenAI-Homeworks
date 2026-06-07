import { getRandomNumber } from '../utils.js';

const number = getRandomNumber()
console.log("number:", number);

const nearestInteger = number + (1 - number % 1)
const nearestEven = nearestInteger + (nearestInteger % 2)

console.log(nearestEven);

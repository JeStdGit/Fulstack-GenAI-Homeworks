import { getRandomNumber } from "../utils.js";

const diameter = getRandomNumber(0, 100)
const depth = getRandomNumber(0, 100)

console.log("diameter:", diameter);
console.log("depth:", depth);

const radius = diameter / 2

const area = Math.PI * Math.pow(radius, 2)
const capacity = area * depth

console.log("capacity:", capacity);
import { getRandomNumber } from "../utils.js";

const width = getRandomNumber(0, 100)
const height = getRandomNumber(0, 100)

console.log("width:", width);
console.log("height:", height);



console.log("area:", width * height);
console.log("perimeter:", (width * 2) + (height * 2));
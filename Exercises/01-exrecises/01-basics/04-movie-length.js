import { getRandomNumber } from "../utils.js";

const lengthInMinutes = getRandomNumber(0, 180)
console.log("lengthInMinutes:", lengthInMinutes);

const hours = Math.floor(lengthInMinutes / 60)
const minutes = lengthInMinutes % 60

console.log(`the movie length is: ${hours} hour(s) and ${minutes} minute(s). (${hours}:${minutes})`);

import { getRandomInteger } from "../utils.js";

const number = getRandomInteger(1, 9999)
console.log("number:", number);

if (number > 1000) console.log(4);
else if (number > 100) console.log(3);
else if (number > 10) console.log(2);
else console.log(1);

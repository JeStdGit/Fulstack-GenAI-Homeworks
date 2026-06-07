import { getRandomInteger } from "../utils.js";

const number = getRandomInteger(0, 50)

let sum = 0
for (let index = 0; index <= number; index++) {
    sum *= index
}

console.log(sum);

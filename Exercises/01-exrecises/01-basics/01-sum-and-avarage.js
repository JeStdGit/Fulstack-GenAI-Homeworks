import { getRandomNumber } from "../utils.js";

let sum = 0
for (let index = 0; index < 3; index++) {
    const number = getRandomNumber()
    console.log(`receved number: ${number}`);
    sum += number
}

console.log("sum:", sum);
console.log("avarage:", sum / 3);
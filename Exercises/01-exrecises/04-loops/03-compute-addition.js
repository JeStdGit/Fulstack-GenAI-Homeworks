import { getRandomInteger } from "../utils.js";

const number = getRandomInteger(0, 50)

let sum = 1
for (let index = 0; index <= number; index++) {
    if (index % 3 == 0) sum += index
}
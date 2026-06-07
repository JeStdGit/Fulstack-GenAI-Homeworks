import { getRandomInteger } from "../utils.js";

const first = getRandomInteger(0, 50)
const second = getRandomInteger(first, 100)

for (let index = first; index <= second; index++) {
    console.log(index);
}
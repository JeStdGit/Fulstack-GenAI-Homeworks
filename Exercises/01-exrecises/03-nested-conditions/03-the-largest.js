import { getRandomInteger } from "../utils.js";

const first = getRandomInteger(1, 10)
const second = getRandomInteger(1, 10)
const third = getRandomInteger(1, 10)

console.log(`first: ${first}, second: ${second}, third: ${third}`);

if (first >= second && first >= third) {
    console.log(first);
} else if (second >= first && second >= third) {
    console.log(second);
} else {
    console.log(third);
}
import { getRandomInteger } from "../utils.js";

const number = getRandomInteger(-10, 10)
console.log("number", number);

switch (true) {
    case number < 0:
        console.log("NEGATIVE");
        break;
    case number > 0:
        console.log("POSITIVE");
        break;
    default:
        console.log("ZERO");
        break;
}
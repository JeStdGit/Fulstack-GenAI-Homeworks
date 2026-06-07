import { getRandomInteger } from '../utils.js';

const first = getRandomInteger(1, 10)
const second = getRandomInteger(1, 10)

console.log(`first: ${first}, second: ${second}`);

switch (true) {
    case first > second:
        console.log("The Greater:", first);
        break;
    case first < second:
        console.log("The Greater:", second);
        break
    default:
        console.log("EVEN!", first, second);
        break;
}

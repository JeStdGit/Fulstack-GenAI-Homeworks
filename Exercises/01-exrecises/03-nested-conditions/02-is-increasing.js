import { getRandomInteger } from "../utils.js";

const first = getRandomInteger()
const second = getRandomInteger()
const third = getRandomInteger()

if (second > first && third > second) {
    console.log("Increasing");
} else console.log(":/");

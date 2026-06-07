import { getRandomInteger } from "../utils.js";

const matrix = []
for (let index = 0; index < 10; index++) {
    matrix.push(new Array(10))
    for (let subIndex = 0; subIndex < matrix[index].length; subIndex++) {
        matrix[index][subIndex] = getRandomInteger(0, 100)
    }
}
console.log("Before", matrix);

for (let index = 0; index < matrix.length; index++) {
    for (let subIndex = 0; subIndex < matrix[index].length; subIndex++) {
        if (
            matrix[index][subIndex] % 5 == 0
            || matrix[index][subIndex] % 7 == 0) {

            matrix[index][subIndex] = 0
        }
    }
}

console.log("After", matrix);

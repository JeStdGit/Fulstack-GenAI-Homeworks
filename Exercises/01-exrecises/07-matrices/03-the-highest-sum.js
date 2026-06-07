import { getRandomInteger } from "../utils.js";

const matrix = []
for (let index = 0; index < 10; index++) {
    matrix.push(new Array(10))
    for (let subIndex = 0; subIndex < matrix[index].length; subIndex++) {
        matrix[index][subIndex] = getRandomInteger(0, 100)
    }
}

let highestSum = {
    index: 0,
    sum: 0
}
for (let index = 0; index < matrix.length; index++) {
    let sum = 0
    for (let subIndex = 0; subIndex < matrix[index].length; subIndex++) {
        sum += matrix[index][subIndex]
    }
    console.log(`highestSum: ${highestSum.sum}, current: index ${index}, sum ${sum}`);

    if (sum > highestSum.sum) {
        highestSum = {
            index,
            sum
        }
    }
}

console.log('final highestSum:', highestSum);

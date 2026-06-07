import { getRandomInteger } from "../utils.js";

let schoolTotalGrades = 0
for (let index = 0; index < 100; index++) {

    let studentTotalGrades = 0
    for (let grade = 0; grade < 10; grade++) {
        const currentGrade = getRandomInteger(50, 100)
        studentTotalGrades += currentGrade
        schoolTotalGrades += currentGrade
    }
    console.log(`student ${index} has avarage of ${studentTotalGrades / 10} %`);
}

console.log(`The overall school avarage is: ${schoolTotalGrades / 100 / 10} %`);
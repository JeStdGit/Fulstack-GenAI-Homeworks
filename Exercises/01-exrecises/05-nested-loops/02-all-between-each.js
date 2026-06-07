import { getRandomInteger } from "../utils.js";

/*
Read 10 integers. Display all integers between each consecutive pair. Example: input 9, 12, 8, 8, ... → output 9, 10, 11, 12, 11, 10, 9, 8, 8, ...
*/

let previous = -1
for (let index = 0; index < 10; index++) {
    const current = getRandomInteger(0, 50)
    if (previous === -1) {
        previous = current
        continue
    }

    console.log(`- from ${previous} to ${current} -`);


    if (current > previous) {
        for (let index = previous; index < current; index++) {
            console.log(index);
        }
    } else if (previous > current) {
        for (let index = previous; index > current; index--) {
            console.log(index);
        }
    } else console.log("there's no gap!");

    previous = current
    console.log("___");
}
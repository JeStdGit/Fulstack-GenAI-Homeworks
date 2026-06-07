import { getRandomInteger } from "../utils.js";

function getProgrammerSalary(name, salary) {
    console.log(`Programmer:, ${name} | current salary: ${salary}`);
    let salaryWithBonus = salary
    if (salary <= 6000) salaryWithBonus += salary * 0.10
    else salaryWithBonus += salary * 0.05

    console.log(`Salary with Bonus: ${salaryWithBonus}`);
}

getProgrammerSalary("Pinni", getRandomInteger(1000, 10000))
getProgrammerSalary("David", getRandomInteger(1000, 10000))
getProgrammerSalary("Elazar", getRandomInteger(1000, 10000))
getProgrammerSalary("Jacob", getRandomInteger(1000, 10000))
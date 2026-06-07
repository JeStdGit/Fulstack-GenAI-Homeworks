import { getRandomInteger } from "../utils.js";

const salary = getRandomInteger(10000, 500000)
console.log("salary:", salary);

function getSalaryTax(salary) {
    let totalTax = 0


    if (salary <= 23000) return salary * 0.10

    totalTax += 23000 * 0.10

    totalTax += Math.min(salary - 23000, 23000) * 0.20 // next 23,000 - 20%

    if (salary <= 46000) return totalTax

    totalTax += Math.min(salary - 46000, 74000) * 0.30 // next 74,000 - 30%

    if (salary <= 120000) return totalTax

    totalTax += Math.min(salary - 120000, 100000) * 0.40 // next 100,000 - 40%

    if (salary <= 220000) return totalTax

    totalTax += (salary - 220000) * 0.50

    return totalTax
}

const salary1 = getRandomInteger(10000, 500000)
const salary2 = getRandomInteger(10000, 500000)
const salary3 = getRandomInteger(10000, 500000)
console.log(`freelancer: Jacob, annual income: ${20000}, total tax: ${getSalaryTax(20000)}`);
console.log(`freelancer: Jacob, annual income: ${salary1}, total tax: ${getSalaryTax(salary1)}`);
console.log(`freelancer: Moshe, annual income: ${salary2}, total tax: ${getSalaryTax(salary2)}`);
console.log(`freelancer: David, annual income: ${salary3}, total tax: ${getSalaryTax(salary3)}`);

// 2.1: The Spread Operator(Merging)
const person = { name: "Clark Kent", occupation: "Reporter" };
const powers = { flight: true, strength: "superhuman" };

const superHero = { ...person, powers }

console.log(superHero);



// 2.2: The Rest Operator(Function Parameters)
function calculateTotal(discount, ...prices) {
    let sum = 0

    for (const price of prices) {
        sum += price - price / discount
    }

    return sum
}

console.log(calculateTotal(10, 50, 80, 100, 160))

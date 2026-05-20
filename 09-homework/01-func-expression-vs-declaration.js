let productsPrice = [50, 40, 90, 135, 68]
let discountPrecent = 15

// here it'll work because the compiler reads the whole code before running it
// and when it detects functions it remembers them
// then when it runs the code it knows that you refers to this function below
let total = calculateTotal(productsPrice)
// here it'll threw an exception because it's like a value initialization (as a function)
// and it cannot acsses that before you initialize the value
let totalAfterDiscount = calculateDiscount(total)

function calculateTotal(productsPrice) {
    let sum = 0
    for (const price of productsPrice) {
        sum += price
    }
    return sum
}

const calculateDiscount = function (total) {
    return total - total / discountPrecent
}

console.log("total:", total)
console.log("total after discount:", calculateDiscount(total));

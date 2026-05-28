// 3.1: Transforming Data Arrays
const inventory = [
    { item: "Laptop", price: 1200, quantity: 5 },
    { item: "Mouse", price: 25, quantity: 50 },
    { item: "Keyboard", price: 100, quantity: 20 }
];

const total = inventory.reduce((total, product) => total += product.price * product.quantity, 0)
console.log(total);


// 3.2: Grouping Data (Advanced Reduce)
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
];
// Expected Output: { '25': ['Alice', 'Bob'], '30': ['Charlie'] }

const group = people.reduce((sorted, person) => {

    if (!sorted[person.age]) sorted[person.age] = []

    sorted[person.age].push(person.name)
    return sorted
}, {})

console.log(group);

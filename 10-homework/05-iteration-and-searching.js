const students = [{ name: 'John', passed: true }, { name: 'Jane', passed: false }]

students.forEach(
    student => console.log("John's record has been reviewed.")
)

let scores = [45, 65, 88, 92, 55]

let goodScore = scores.find(score => score > 85)
console.log(goodScore);

let areAllAbove40 = scores.every(score => score > 40)
console.log(areAllAbove40);

let areAnyBelow50 = scores.some(score => score < 50)
console.log(areAnyBelow50);
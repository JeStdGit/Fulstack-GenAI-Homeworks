let person1 = {
  name: "Moshe",
  age: 27,
  country: "Israel",
};
let person2 = person1;
person2.age = 30;

console.log("person1's age:", person1["age"]);

let score1 = 90;
let score2 = score1;
score2 = 78;

console.log("score1:", score1);

console.log(
  "Both objects (person1 and person2) point to the same reference in the memory, so when you change the value inside one of them you'r changing the value for both.",
);
console.log(
  "Unlike objects, premitives variables (score1 and score2) are stored in the directly. This means that when you change one variable - your adressing a specific address in the memory assigned to that variable, therfore, it will not affect the other variable, which has it's own unique address.",
);

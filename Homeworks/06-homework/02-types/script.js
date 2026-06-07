let a = "15";
let b = 10;
let c = "2";
let addition = Number(a) + b;

console.log("addition:", addition);
console.log("variable type:", typeof addition);
console.log("multiplication:", a * c);
console.log(
  "The reason why we don't need to explicity declare a string as a number when multiplying, is that multiplication is not a valid operation for strings, this makes the conversion of a strings implicit",
);

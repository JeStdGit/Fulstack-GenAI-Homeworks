

## **Part 1: Destructuring (Objects & Arrays)**

Destructuring assignment is a special syntax that allows us to "unpack" arrays or objects into a bunch of variables.

### **Exercise 1.1: Deep Object Destructuring**

Given the following user payload from an API, use object destructuring to extract the user's username, their city of residence, and their first hobby. Rename the username variable to handle during the extraction.

```javascript
const userProfile = {
  id: 402,
  username: "code_ninja",
  location: {
    country: "USA",
    city: "Seattle"
  },
  preferences: {
    hobbies: ["cycling", "reading", "gaming"]
  }
};
```


### **Exercise 1.2: Array Destructuring & Swapping**

You have an array representing top scores: `[88, 92, 100]`. Use array destructuring to assign the highest score to a variable `firstPlace` and the remaining scores to an array called `runnerUps`.

## **Part 2: Spread and Rest Operators (...)**

### **Exercise 2.1: The Spread Operator (Merging)**

Create a new object called `superHero` that merges the properties of the `person` object and the `powers` object. Do not mutate the original objects.

```javascript
const person = { name: "Clark Kent", occupation: "Reporter" };
const powers = { flight: true, strength: "superhuman" };
```

### **Exercise 2.2: The Rest Operator (Function Parameters)**

Write an arrow function named `calculateTotal` that takes a discount percentage as its first argument, and an indefinite number of item prices as the remaining arguments (using the rest operator). The function should apply the discount to the sum of the items.

  

## **Part 3: The \`reduce()\` Method**

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, passing in the return value from the calculation on the preceding element.

### **Exercise 3.1: Transforming Data Arrays**

You are given an array of inventory objects. Use the `reduce()` method to calculate the total value of all items currently in stock (price \* quantity).

```javascript
const inventory = [ 
  { item: "Laptop", price: 1200, quantity: 5 },
  { item: "Mouse", price: 25, quantity: 50 },
  { item: "Keyboard", price: 100, quantity: 20 }
];
```


### **Exercise 3.2: Grouping Data (Advanced Reduce)**

Given an array of people, use reduce() to group them into an object based on their age.

```javascript
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];  
// Expected Output: { '25': ['Alice', 'Bob'], '30': ['Charlie'] }
```
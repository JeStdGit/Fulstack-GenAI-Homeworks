Hey everyone! Here are 4 exercises covering the JavaScript basics we discussed. Each exercise focuses on a different topic and will challenge you to think about how JavaScript works under the hood.

You can write all your answers in a single `homework.js` file or split them up. Good luck!

### Exercise 1: Primitives vs. Reference Types

**Your Task:**

- Create a variable named `person1` containing an object with the properties `name` (choose any name) and `age` (choose any age).
- Create another variable named `person2` and assign `person1` to it.
- Change the age of `person2` to `99`.
- Console log both `person1.age` and `person2.age`.
- Now, create a variable `score1` with the value `85` (a number). Create `score2` and assign `score1` to it. Change `score2` to `100`. Console log both variables.

**Question (answer in a comment):**
Why did changing `person2` affect `person1`, but changing `score2` did NOT affect `score1`?

---

### Exercise 2: Typing (Type Conversions & typeof)

**Your Task:**
Given the following variables:

```javascript
let a = "15";
let b = 10;
let c = "2";
```

- Find a way to add `a` and `b` together so that the result is exactly `25` (a number) and NOT the string `"1510"`.
- Print the type of your result using `typeof` to prove that it is indeed a number.
- What will be the result of `a * c`? Try logging it to the console.

**Question (answer in a comment):**
Explain why JavaScript successfully performs the multiplication even though the variables are strings.

---

### Exercise 3: Block Scope

**Your Task:**
Copy the following code into your editor:

```javascript
let secretMessage = "Hello";

if (true) {
  let secretMessage = "Goodbye";
  var hackerMessage = "I am inside!";
  console.log("Inside block: ", secretMessage);
}

console.log("Outside block 1: ", secretMessage);
console.log("Outside block 2: ", hackerMessage);
```

- Run the code and observe the console outputs.
- Change the `var` keyword on the `hackerMessage` line to `let` or `const`. Run the code again—what happened?

**Question (answer in a comment):**
Explain why changing the keyword to `let` caused an error when trying to print outside the block. Also, why did the output of `secretMessage` remain `"Hello"` outside the block, even though we "changed" it to `"Goodbye"` inside?

---

### Exercise 4: Truthy and Falsy Values

**Your Task:**
Here is an array containing various data types:

```javascript
const mixedValues = [0, "hello", "", null, 42, undefined, NaN, "false", [], {}];
```

- Write a loop that iterates over each item in the `mixedValues` array.
- Inside the loop, use a simple `if` statement (for example: `if (mixedValues[i])`) to check if the current value is Truthy or Falsy.
- If the value is Truthy, log a message to the console like: `"[value] is Truthy"`.

**Question (answer in a comment):**
Was the string `"false"` evaluated as Truthy or Falsy? Is an empty array `[]` Truthy or Falsy? Add a comment explaining why.

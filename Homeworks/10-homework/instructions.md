# 

## **Section 1: Arrow Functions and the "Parent Scope"**

Surprisingly, calling `greetArrow()` prints `undefined`, while calling `delay()` prints the `person` object. Investigate the difference between defining an arrow function within an object's method block and defining it directly at the object level.

```JavaScript

const person = {  
    name: "Pinni",  
    age: 23,  
    delay() {  
        // Arrow function used inside a setTimeout  
        setTimeout(() => console.log(this), 4000);
    }  
};  
  
const user = {  
    name: 'Alice',  
    // Arrow function used directly as an object method  
    greetArrow: () => {  
        console.log("Hello, " + this.name);  
    }  
};
   
person.delay();  
user.greetArrow();
```

## **Section 2: Basic Array Manipulation**

3. **Stack and Queue Operations:** Given the starting array `let tasks = ['wash dishes', 'do laundry']`, write the JavaScript code to accomplish each of the following steps sequentially:  
   * Use the appropriate method to add 'clean room' to the **end** of the array.  
   * Use the appropriate method to add 'buy groceries' to the **beginning** of the array.  
   * Remove the **last** item from the array and store it in a variable called `completedTask`.  
   * Remove the **first** item from the array and store it in a variable called `skippedTask`.

## **Section 3: Modifying and Extracting Subsets**

4. **Splice vs Slice:** Given the array `let months = ['Jan', 'March', 'April', 'June']`:  
   * Use the `splice` method to insert 'Feb' at the correct index so the array reads in chronological order. Ensure no existing elements are deleted.  
   * Use the `slice` method to create a new array containing only 'March' and 'April'. Verify that the original array is not mutated by this operation.

## **Section 4: Copying, Combining, and Joining**

5. **Copying Arrays:** Write two distinct ways to create a shallow copy of the array `let original = [1, 2, 3]` without simply referencing the same array in memory.  
6. **Combining and Joining:** Given the arrays `let group1 = ['Alice', 'Bob']` and `let group2 = ['Charlie', 'Dave']`:  
   * Combine these two arrays into a single new array called `allUsers`.  
   * Convert the `allUsers` array into a single `string` where the names are separated by a hyphen and a space (e.g., "Alice \- Bob \- ...") using the `join` method.

## **Section 5: Iteration and Searching**

7. **Iteration:** Given an array of student objects `const students = [{name: 'John', passed: true}, {name: 'Jane', passed: false}]`, use the `forEach` method to iterate over the array and print a console message for each student (e.g., "John's record has been reviewed.").  
8. **Searching and Testing Conditions:** Given the array of test scores `let scores = [45, 65, 88, 92, 55]`:  
   * Use the `find` method to locate and return the **first** score that is strictly greater than 85\.  
   * Use the `every` method to check if **all** scores in the array are above 40\. This should return a `boolean`.  
   * Use the `some` method to check if **any** scores are below 50\. This should return a `boolean`.

## **Section 6: Transformation and Filtering**

9. **Filter and Map:** Given the array of products `const products = [{id: 1, price: 20}, {id: 2, price: 50}, {id: 3, price: 15}]`:  
   * First, use the `filter` method to create a new array containing only the products that cost $20 or more.  
   * Next, chain or use the `map` method on the resulting array to extract just the `id` values of those expensive products, resulting in an array of numbers (e.g., `[1, 2]`).
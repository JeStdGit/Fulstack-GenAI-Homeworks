

### ---

**Part 1: Function Expressions vs. Function Declarations**

Understanding hoisting is critical for debugging.

**Task:**

1. Write a program that attempts to invoke two different functions *before* they are defined in the code.  
2. Define the first function using a standard **Function Declaration** (e.g., calculateTotal).  
3. Define the second function using a **Function Expression** assigned to a const variable (e.g., calculateDiscount).  
4. **Question:** In a comment below your code, explain exactly why one function executed successfully while the other threw a ReferenceError. Use the term "hoisting" in your explanation.

### **Part 2: The this Keyword (Regular Functions & Bind)**

*Note: Do not use arrow functions for this exercise.*

Context loss is a common bug in JavaScript. Let's intentionally create this bug and then fix it.

**Task:**

1. Create an object called paymentGateway with a property gatewayName (e.g., "Stripe") and a regular method called processPayment.  
2. Inside processPayment, use the this keyword to log: "Processing payment through \[gatewayName\]".  
3. Test the method by calling paymentGateway.processPayment(). It should work perfectly.  
4. **The Bug:** Now, extract that method into a global variable: const externalProcessor \= paymentGateway.processPayment;.  
5. Call externalProcessor(). You should see that this.gatewayName is now referring to the global/window object.  
6. **The Fix:** Create a new variable called boundProcessor. Use the .bind() method to permanently attach the paymentGateway context to the extracted function.  
7. Call boundProcessor() and verify it logs the correct gateway name.

### **Part 4: ES6 Shorthands**

Clean, readable code is professional code. Let's refactor some older syntax.

**Task:**

Look at the following ES5 code snippet. Rewrite the createProduct function using **ES6 Property Value Shorthands** and **ES6 Method Shorthands**.

JavaScript

// Old ES5 Code \- Refactor this\!  
function createProduct(id, name, price) {  
  return {  
    id: id,  
    name: name,  
    price: price,  
    getSummary: function() {  
      return "Product: " \+ this.name \+ " costs $" \+ this.price;  
    }  
  };  
}

var myProduct \= createProduct(101, "Wireless Mouse", 25);  
console.log(myProduct.getSummary());

**Requirements for the refactor:**

1. Eliminate the redundant property assignments (e.g., id: id).  
2. Rewrite getSummary without using the function keyword (use the ES6 method shorthand).  
3. Use modern variable declarations (const/let) and template literals for the string concatenation.
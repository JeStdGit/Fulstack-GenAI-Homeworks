let secretMessage = "Hello";

if (true) {
  let secretMessage = "Goodbye";
  var hackerMessage = "I am inside!";
  console.log("Inside block: ", secretMessage);
}

console.log("Outside block 1: ", secretMessage);
console.log("Outside block 2: ", hackerMessage);

console.log("");

console.log(
  "the reason why when you declaring a variable with 'let' keyword get a crush, is that let assigns the variable to it's own scope only keeping it undefined for other scopes while var is not assigned to a specific scope it is accessible from other scopes",
);
console.log(
  "The 'secretMessage' variable is still showing (but with a different value) from the same reason, The assignment inside the condition scope is not recognized outside of it while using the 'let' keyword that why we still getting the 'Hello' assigned earlier in the same scope",
);

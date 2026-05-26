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



// let's start with this: Objects in JavaScript do not create (or define) a scope.
// one more thing: scope - defined when writting the code (by blocks `{}`), context (this) - initiated at runtime.
// regular functions get their own context at runtime depending on who calls them (who pulled the trigger)
// therefore, calling `person.delay()` defines `person` as the context (`this`) of `delay()`.
// arrow functions don't have their own context, they're referring to the context where they've been written, this behavior is
// locked down and cannot be changed (that why `user.greetArrow.bind(user)` won't work...).
// callbacks don't save the call reference (who calls this function) and call the functions from the global scope, so when you
// call a regular function as a callback, it loses its context (the call reference), but when you call an arrow function as a
// callback it refers to the location where it has been written to get a context (this is how it fixes the callback problem).
// because in the `person` case the call for `delay()` (regular func) is executed by `person` (`person.delay()`), the context
// of `delay()` becomes the `person` object (not because it has been written in `person`'s 'scope' *objects do not define a scope.!!*),
// the arrow function does not have a context so even though it has been called as a callback it gets its context from where it has
// been written - inside `delay()` which gets its context from the reference at runtime (`person`).
// On the other hand, the `greetArrow()` (arrow function) does not have its own context so it gets the context from where it has been
// written - `user` but objects do not define a scope, so it goes up to the global scope and it becomes its context
// the global doesn't have a `name` property, so it gives an undefined.

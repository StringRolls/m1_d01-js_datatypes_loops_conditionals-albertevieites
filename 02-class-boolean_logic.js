// Class code examples
// String .includes() method
const str = "To be, or not to be, that is the question.";
console.log(str.includes("to be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false

// booleans are fun!
// Logical operators: AND
console.log(true && true); // => true
console.log(true && false); // => false
console.log(false && true); // => false
console.log(false && false); // => false

// Logical operators: OR
console.log(true || true); // => true
console.log(true || false); // => true
console.log(false || true); // => true
console.log(false || false); // => false

// Boolean operators do not return boolenas
console.log("cappuccino" && 4 > 2);

var firstName;

console.log(`Hola ${firstName || "guest"}`);
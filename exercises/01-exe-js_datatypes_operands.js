// Practice JS datatypes and operands

// 1. Create variables with your first name, last name and age.
let firstName = "alberte";
let lastName = "vieites";
let age = 44;
// 2. Make the first letters of your first and last name capitalized.
let capFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
console.log(capFirstName);

let capLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
console.log(capLastName);
// 3. Concatenate your first and last name (after capitalizing them) to give your full name.
let fullName = capFirstName + ' ' + lastName;
// other:
// let fullName = capFirstName + ' ' + capLastName;

// 4. Use console.log() method to output the sentence with the following structure: `My name is __________ and I am  _____ years old.`
console.log(`My name is ${fullName} and I am ${age} years old.`)

// All primitive data types are immutable - meaning, once a primitives are created, they can't be modified.
// Example from lesson:
let city = "miami";
console.log(city[0]); // <== m
city[0] = "M"; // let's capitalize the first letter
console.log(city); // ==> ??

city = "berlin";
console.log(city); // <== berlin

city[0] = "B";
console.log(city); // ==> ??

const message = "Don't be sad, be happy!";
console.log(message.slice(0, 3, "don"));
console.log(message); // ==> ??

const statement = "I love JavaScript!";
const subStatement = statement.substr(2, 9);
console.log(statement);

statement[0].toLowerCase();
console.log(statement); // ==> ??

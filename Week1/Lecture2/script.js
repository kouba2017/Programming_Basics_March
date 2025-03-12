// Week One | Lecture Two - JavaScript Basics

// 1. Printing to the console

// console.log(Hello, World!); // we must convert our words to the computer to understand
// therefore we use " " for this case since we want to display a phrase

console.log("Hello, World!");

//Why a semicoma, it is like a breakpoint in our curent language
// to inform our computer that this is an end of instruction

// 2. Variable Declaration & Data Types

// String: A sequence of characters enclosed in quotes


// Example of logging two strings with different declarations
var firstName = "Joe"; // Using double quotes
var lastName = 'Clair'; // Using single quotes
console.log(firstName+ lastName); // Output: JoeClair without spacing
console.log(firstName, lastName); // Output: Joe Clair with spacing

// Number: A numeric value, including integers and floating points
var age = 25; // number
typeof age; // "number"
console.log(firstName,lastName,"age is ",age);// printing a phrase with our variables


// Boolean: A value that is either true or false
var isStudent = true; // boolean
typeof isStudent; // "boolean"

// 3. Order of Math Operations (Operator Precedence)

// JavaScript follows the standard mathematical order of operations:
// Parentheses > Exponents > Multiplication/Division > Addition/Subtraction
// Also known as PEMDAS (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction)

console.log(10 + 5 * 2); // Output: 20 (Multiplication happens before Addition)
console.log((10 + 5) * 2); // Output: 30 (Parentheses change the order)
console.log(20 / 2 ** 2); // Output: 5 (Exponentiation happens before Division)
console.log(10 % 3 + 4 * 2); // Output: 9 (Modulo happens before Addition)

// Order of operations can be controlled using parentheses


// 4. Array Example
// Array: A collection of multiple values, which can be of different data types
var hobbies = [25, "Joe", 'Clair',true];
//now let's replace our array with more dynamic one:
// var hobbies=[age,firstName,lastName,isStudent];
console.log(hobbies[0]); // Output: 25

// 4. Running the file in terminal
// shortcut for integrated terminal: ctrl+shift+ù
// Use the command: node script.js

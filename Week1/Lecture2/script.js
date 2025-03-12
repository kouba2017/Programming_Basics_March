// Week One | Lecture One - JavaScript Basics

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

// 3. Array Example
// Array: A collection of multiple values, which can be of different data types
var hobbies = [25, "Joe", 'Clair',true];
//now let's replace our array with more dynamic one:
// var hobbies=[age,firstName,lastName,isStudent];
console.log(hobbies[0]); // Output: 25

// 4. Running the file in terminal
// shortcut for integrated terminal: ctrl+shift+ù
// Use the command: node script.js

// if(condition){ //TRUE
//     console.log("TRUE");
// } else{
//     console.log("FALSE");
// }

// IF else // IF elseIf else: chaining on if

// Logic Operators
// === / == /<=/!=
// var age="18"
var age=18
if(age==18){
    console.log("You can watch the show");
}else{
    console.log("Please get older :)");
}

// Arithmetic Operators 
//     /:div  
//     %: mod (remainder)
//     + , * , - , **/^ (power)
// order 
// Parathenses => exponents=> Multiplication / Division => Addition/ Substraction
// PEMDAS

console.log(10 + 5 * 2); // Output:20
console.log((10+5)*2); //Output :30
console.log(20 / 20^2);// Output:1 wrong > 0.05
console.log(10 % 3 + 4 * 2);// Output: 9


// challenge: check if our guests number is even or odd
// even: divisible by 2 => rest =0
// odd: not divisble by 2 > rest!=0

// declare variables 

var guestsNumber= 14;

if (guestsNumber%2==0) {
    console.log("Yes it is even, and this is the number of pairs", guestsNumber/2);
} else {
    console.log("No it is odd");
}


//*****Loops */

// play hide nd seek 
// calculate to 10
console.log(0);
console.log(1);
console.log(2);
// .... console.log(10)

// General Syntax: 3 S
// Start= initial our counter
// Stop: condition
// Steps: Final expression

// i , j , k
console.log("Start of For Loop");

// for(var i=0; i<=10;i++){
//     console.log(i);
// }
// // i++; increment by 1
// // i+=1
// // i=i+1
// console.log("Backward For Loop");

// // decrement i--
// for(var i=10; i>=0;i--){
//     console.log(i);
// }

var userData=["Linder","Sam",40,"samsam@gmail.com"]

// for(var i=0;2<=2;i++){
//     console.log(userData[1]);
// }

//For+If statement

var ages=[12,14,18,18,21]
var limit= ages.length-1
//iteration
for(var i=0;i<=limit;i++){
    if(ages[i]==18){
        console.log(true);
        break;
    }else{
        console.log(false);
    }
    console.log(userData[1]);// see if the loop is still running
}





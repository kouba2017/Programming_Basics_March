var cool;
///called 
//structure of defning of a function
// function functionName(){
//     //body 
//     //instructionq
// }
//arguments=parameters
//methods=functions
var coffeeChoices=["Black","Latte","Iced Coffee"]

function coffeeMachine(){
    console.log("I am ON");
}
//OUTPUT: NOTHING
//call a function
coffeeMachine()
console.log(coffeeMachine);// refernece 

//brewCoffee => passing parameter
function brewCoffee(capsule){
    console.log("Brewing:", capsule);
    //condition => var time =
    for(var i=0;i<=3;i++ ){
        console.log("Still",3-i,"minutes");
    }
    console.log("Ready 💃");
    //return value
}

//call the brewingCoffee
brewCoffee(coffeeChoices[1])

function brewAndCheck(capsule){
    console.log("Brewing:", capsule);
    //condition => var time =
    for(var i=0;i<=3;i++ ){
        console.log("Still",3-i,"minutes");
        // break;
        // return false;
    }
    //breakpoint that finish the function
    //valie within that return 
    // it will be the value of the function
    return true;
}
brewAndCheck(coffeeChoices[1])
var isReady=brewAndCheck(coffeeChoices[0])
console.log(isReady);







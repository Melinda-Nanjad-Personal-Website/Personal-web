//If the value is truthy, print TRUE;
//if value is falsy
//Boolean value false is falsy
//Null value is falsy print false
//undefined is falsy
//"The number 0 is falsy (the only falsy number)";
//"The empty string is falsy (the only falsy string)";
// "I am string" Print TRUE
//empty string" Falsy the only falsy string
// how do you write empty string?

//truthy
let myString = "I am a string";
console.log("True");

let value=5<4

if (value===false) {
    console.log("the boolean value false is falsy");
}

else if (value===null) {
    console.log("The null value is falsy");
}

else if (value===undefined) {
    console.log("the undefined is falsy");
}

else if (value===0) {
    console.log ("the number 0 is falsy(the only falsy number");
}

else if (value==="") {
    console.log ("the empty string is falsy(the only falsy string");
}

else {
    console.log (true);
}

//Number Line
let sum = "-1000";
const number1 = 50;
const number2 = 99;
const sum = number1 + number2;
console.log("The sum of " + number1 + " and " + number2 + " is: " + sum)
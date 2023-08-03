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
let num1 =0
let num2 =101
let sum = num1 + num2
if (sum<-1000) {
    console.log (sum + "is less than 1000");
}
else if (sum<0){
    console.log (sum +" is a negative number");
}
else if (sum===0) {
    console.log (sum + "is equal to 0");
}
else if (sum>0) {
    console.log (sum + "is greater than 100");
}
else if (sum-5) {
    console.log (sum = "-5 is a negative number");
}

//Greater than 5
let num1 =0
let num2= 1002
let sum = num1 + num2 
if (sum = >5) {
console.log (sum = "True");
}
else if 

/* If value truthy then true
if value false , null, undefined, empthy string. */

let value = null
  if (value === true) {
    console.log("true");
  }
   else if (value === false) {
      console.log("The boolean value false is falsy");
    } else if (value === null) {
      console.log("The null value is falsy");
    } else if (value === undefined) {
      console.log("undefined is falsy");
    } else if (value === 0) {
      console.log("The number 0 is falsy (the only falsy number)");
    } else if (value === "") {
      console.log("The empty string is falsy (the only falsy string)");
    }
  

/* Declare a result of num1 and num2
add num1 and num2 
if else sum is less than -1000 then print" is less than -1000";
if else sum is negative value then print " is a negative number";
if else sum is equal 0 then print " is equal to 0";
if else num is largen then 0 " is larger than 0";
if else sum is greater than 10 then print " is greater than 100" */

let num1 = 50;
let num2 = 51;
let sum = num1 + num2;

if (sum < -1000) {
  console.log(sum + " is less than -1000");
} else if (sum < 0) {
  console.log(sum + " is a negative number");
} else if (sum === 0) {
  console.log(sum + " is equal to 0");
} else if (sum > 0 && sum <= 100) {
  console.log(sum + " is larger than 0");
} else {
  console.log(sum + " is greater than 100");
}


/* if num greater and equal than 5 then print true
if num is smaller than 5 then print false */

let num1 =6;
let num2 = 5; 

if (num1 >= 5 && num2 >= 5) {
  console.log(true);
} else {
  console.log(false);
}

/* if two set of values equal then true
if two values one set does not qeual then false 
*/
// Pair and Compare
//IF else statments
//Script
//cat=

const param1A = "cat";
const param1B = "cat";
const param2A = 6;
const param2B = "6";

if (param1A === param1B || param1A == param1B) {
  console.log(true);
}
 else {
  if (param2A === param2B || param2A == param2B) {
      console.log(true);
  } else {
      console.log(false);
  }

//LOOPS & ARRAYS
//Only odd numbers should be displayed, if there is ony one odd number in the array, return an array with that single value.
//input 2,4,6,8,11,20,15,22
// constant number which are given, should only print the odd numbers


    const oddNumbers = [2,4,6,8,11,20,15,22].filter((number) => number%2!==0);
console.log(oddNumbers);

const oddNumbers = [1,2,3,4,5,6,7,8,9,10].filter((number) => number%2!==0);
console.log(oddNumbers);

const oddNumbers = [70,42,55,81,21,91,34].filter((number) => number%2!==0);
console.log(oddNumbers);

const oddNumbers = [12,4,6,8,10,12].filter((number) => number%2!==0);
console.log(oddNumbers);

// Vowels versus Consonant
//"a,,e,i,o,u"
//Define two variables that keep track of the number of consonants and vowels
//Strings
//Count ++ ? 
//lowercase letters

const stringtocheck= "hello";
console.log (stringtocheck);
    let a,e,i,o,u count = 0;
    for (let i = 0; i < stringtocheck.length, i++) {
        if (
            stringtocheck [i] =="a"
            stringtocheck [i] =="e"
            stringtocheck [i] =="i"
            stringtocheck [i] =="o"
            stringtocheck [i] =="u"
        ) {
            a,e,i,o,u count++
        }
}
console.log("RESULT", vowels,consonant);

// Reverse array using a FOR LOOP
//shift,unshift, pop ,splice,slice,push ?
//
//1,2,3, expected to print ,3,2,1
const array = [1,2,3,4,]
const reversedArray=[]

for (let i = array.length -1; i >=0;i--) {
    const valueAtIndex= array[i]
    
    reversedArray.push(valueAtIndex)
}

console.log(reversedArray)
//[4,3,2,1]

const array = [1,3,5,7,9,11]
const reversedArray=[]

for (let i = array.length -1; i >=0;i--) {
    const valueAtIndex= array[i]
    
    reversedArray.push(valueAtIndex)
}

console.log(reversedArray)
//[11,9,7,5,3,1]

const array = [20,50,30,60,200]
const reversedArray=[]

for (let i = array.length -1; i >=0;i--) {
    const valueAtIndex= array[i]
    
    reversedArray.push(valueAtIndex)
}

console.log(reversedArray)
//[200,60,30,50,20]

const array = [1,-1,2,-3,5,-8,13]
const reversedArray=[]

for (let i = array.length -1; i >=0;i--) {
    const valueAtIndex= array[i]
    
    reversedArray.push(valueAtIndex)
}

console.log(reversedArray)
//[13,-8,5,-3,2,-1,1]

//fizzbuzz
//Create a JavaScript code that prints each number from 1 to 100 on a new line.
//For each multiple of 3, print "Fizz" instead of the number.
//For each multiple of 5, print "Buzz" instead of the number.
//For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
//



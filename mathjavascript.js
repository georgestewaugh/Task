// File: mathjavascript.js
// This script performs basic arithmetic operations: addition, subtraction, multiplication, and division.  

const a=5;
const b=10;
// Performing arithmetic operations
const add=a+b;
const subtract=a-b;
const multiply=a*b;
const divide=a/b;

console.log("Addition:", add);
console.log("Subtraction:", subtract);
console.log("Multiplication:", multiply);
console.log("Division:", divide); 

// using arrow Functions example for arithmetic operations
// using arrow function for addition
const Add =(c,d) =>   {
    return  c+d;
}
console.log ( "Adition 2 value  is " + Add(20,30))

 //using  arrow function for subtraction
 const Sub = (c,d) =>{
    return c-d;
 }
console.log( "subration 2 values are  " + Sub(60,30));


//using arrow function for multiplication

const Mul=(e,f) =>  (e*f);
    console.log("Multiply 2 number are  "  +  Mul (10,20));

//using arrow function for division
const Div =(g,h) =>  h!==0? g/h : "error: divide by zero";
   console.log( "divided 2 numbers are  "+ Div(100,20)); 





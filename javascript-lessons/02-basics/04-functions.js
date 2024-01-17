// let's see how we can create functions;

// function declaration;

function greet(name){
  console.log(`hello ${name}!`);
}

// greet('Aditya');
// greet("Harsh");

// we can also declare function using variable;
// here we are storing the function into variable;
let greetAgain = function(name){
  console.log(`Hello again ${name}`);
}

// greetAgain('kunal');

// now let's create a function which adds two values;

// function sumOf(num1, num2){
//   return num1 + num2;
// }

// (sumOf(3,6));

// Now let's see how to write higher order function;

let productOf = (num1, num2)=>{
  return (num1*num2);
}

// productOf(2,4);


// Now let's create one higher order function;


let calculationOf = (num1, num2, fn)=>{
  console.log(fn(num1,num2));
}

// calculationOf(2,4,productOf);
// calculationOf(2,4,sumOf);

// let's learn more about arrow function and it's uses;
// here we don't have to write return and use {};
// we can write a simple arrow function in one line;
// let sumOf = (num1, num2) => (num1+num2);
// the equivalent regular function is:
// let add = function(num1,num1){
//   return num1 + num2;
// }

// console.log(sumOf(2,4));

// immediately Invoked function expressions(IIFE);

// why do we use IIFE function, because we want to avoid global pollution; 
/**
 * 1. Creating a private scope;
 * 2. Avoiding Global variable pollution;
 * 3. preventing variable hoisting issues;
 * 4. Module Pattern;
 * 5. Data Encapsulation;
 */
// let's write some IIFE functions

console.log(((number1, number2)=>{
  return number1 + number2;
})(4,4));






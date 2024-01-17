/**
 * numbers and it's methods:
 * Maths.
 */


let age = 25; 

// Math.sqrt() will give us the square root;
let squareRoot = Math.sqrt(age);

// Now, we want an absolute value, so we can use Math.abs();
age = -23;
// console.log(age);
// console.log(Math.abs(age));

// Now if we want to generate some random value we can use Math.random();
// Math.random() will only print values from 0 to 1; 
let random = Math.random();

// Now, let's get random value for 10 times;

for(let i = 1; i<=10; i++){
  // console.log(random);
}

// What if we want to take values randomly from 1 to 10;

/**
 *  Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
    Multiplying by 10 scales this range to 0 (inclusive) to 10 (exclusive).
    Math.floor() rounds down the result to the nearest integer, ensuring you get whole numbers.
    Finally, adding 1 shifts the range to 1 (inclusive) to 10 (inclusive).
    You can use this code to generate a random value between 1 and 10 as needed. 
    If you want a different range, adjust the multiplier and the constant accordingly.
 */

// let randomValue = Math.floor(Math.random() * 10) + 1;

for(let i = 1; i <= 100 ; i++){
  console.log(randomValue);
  
}


const age2 = "25";


const ageInNum = parseInt(age2);
console.log(ageInNum);
console.log(typeof ageInNum);

let num = 23.3435;

// element.toFixed() will give value to that decimal point
console.log(num.toFixed(2));



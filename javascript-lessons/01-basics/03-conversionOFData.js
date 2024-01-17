/**
 * let's convert string values to numbers;
 * To do so, we need to use Number(element);
 * this will convert string value to number;
 */

// // this will give age but in string
// let age = "23";
// console.log(typeof age);//sting


// // Number(); will convert the age to number;
// let ageInNum = Number(age);
// console.log(typeof ageInNum);
// console.log(ageInNum);// age in number;


// but what if we get 12abc as a value;

// this will give us string
// let score = "124abc";

// console.log(score);
// console.log(typeof score);

// now, let's convert this to number;

// let newScore = Number(score);
// console.log(newScore);
// console.log(typeof newScore);// this is returning NAN (not an number);


// what if you get undefined as a value;

// let score2 = "";
// console.log(typeof score2); // string;

// let newScore2 = Number(score2);
// console.log(newScore2); // this will convert undefine to 0;
// console.log(typeof newScore2); // this will gives us a number;

/**
 * 123 => 123 in numbers
 * 123abc => NAN in numbers
 * undefined => 0 in numbers;
 * true => 1 in numbers;
 * false => 0 in numbers;
 */


// ***** operations ***** //

// let value = 3; 
// console.log(value); 3
// let negValue = -value;

// this is give us -3;
// console.log(negValue); 


// console.log(2 + 2); //add
// console.log(2 - 2); // sub
// console.log(2 * 2); // multiplication
// console.log(2 / 2); // division
// console.log(2 % 2); // module
// console.log(2 ** 2); // this will give us 2 to the power of 2;

// now lets add the strings;

const firstName = "Aditya";
const lastName = "Patil";

// Note: we can only add two strings we cannot substract to strings;
// const fullName = firstName + lastName;
// const fullName2 = firstName - lastName;
// console.log(fullName2);
// console.log(fullName);


// increament operators;

let x = 1; 
const y = x++;

// console.log(x);
// console.log(y);

let a = 1; 
const b = ++a;

// console.log(a);
// console.log(b);


// comparison operators;

// this will check the values but not the types;
// this will give us true;
// console.log("2">1);
// console.log("02">1);



// console.log(null>0);// false;
// console.log(null == 0);// false;
// console.log(null >= 0);// true; 

// "===" will strictly check the values;


// console.log("2"===2); // false;

// datatypes: for interviews;






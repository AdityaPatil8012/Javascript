// booleans and comparison operators

// booleans just give two values "True" or "false". for eg.

let num1 = 23;
let num2 = 24;


// this is comparison between 2 values.
console.log(num1>num2);//this value would be false.

console.log(num1<num2);//this value would be True.

let num3 = 35;
let num4 = 35;
console.log(num3<=num4);

//  == vs ===
/* "==" will only check the values but not the date types.
   "===" will check both values and the date types.
 */

let num5 = 45;
let num6 = "45";

console.log(num5==num6);
console.log(num5===num6);

console.log(num5!=num6); // this is only checking values so,it will return false
console.log(num5!==num6); // this is true because the data type are different so it will return true 

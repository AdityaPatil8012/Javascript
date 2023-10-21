// array destructuring;

const myArray = ["value1", "value2", "value3", "value4"];  
// let var1 = myArray[0]; 
// let var2 = myArray[1];
// this works fine but their is simple way to do the same thing

// this method only works in javascript;

// let [var1, var2] = myArray
// console.log(`value of var1 is ${var1}`);
// console.log(`value of var2 is ${var2}`);



// if I have to skip one item in the array;

// let[var1,  , var2] = myArray
// console.log(`value of var1 is ${var1}`);
// console.log(`value of var2 is ${var2}`);

// we can add the remaining items in new array;

let[var1, var2, ...myNewArray] = myArray;
console.log(`value of var1 is ${var1}`);
console.log(`value of var2 is ${var2}`);
console.log(`My new array is ${myNewArray}`)
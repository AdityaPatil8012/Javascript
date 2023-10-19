// intro to arrays
/**
 * you can store any type of data in arrays like
 * numbers, string, undefined, null etc
 * And arrays are muteble that means you can 
 * change the value inside the arrays
 */

// reference type: array is a reference type
// All the reference types are objects.

// ordered collection of items

let names = ["Aditya", "kunal", "Jayraj"];
console.log(names);
console.log(names[0]);
// I have change the array item from jayraj to ved.
names[2] = "ved";
console.log(names);

let num = [1, 2, 3 , 4];
console.log(num);
console.log(num[3]);
console.log(typeof num);
console.log(Array.isArray(num));
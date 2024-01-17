/**
 * String and string methods:
 * 
 */

// how to create a string;

const firstName = "Aditya";

// how to create a string object using "new" keyword;
const lastName = new String("Patil");

// console.log(firstName);// this will return the string
// console.log(lastName);// this will create a object string;


// Instance properties are defined on string.prototype and shared by all string instance

// imp properties/methods of the string:

// how to get the lenght of the string:
// console.log(firstName.length);

// // how to get the value from indices:
// console.log(firstName);
// console.log(firstName.charAt(0))


// // how to get the index of the value:
// console.log(firstName.indexOf("A"));
// console.log(firstName.indexOf("a"));

const sentence = "My name is Aditya Patil. I am 23 years old and I am a dropout";
// // this will give us first index of the char occurence;
// console.log(sentence.indexOf("a"));

// // this will give us last index of the char occurence;
// console.log(sentence.lastIndexOf("a"));

// // this will return -1 because "z" is not present in this sentence;
// console.log(sentence.indexOf("z"));

// // this will give us last occurence: 
// console.log(firstName.lastIndexOf("a"));


// // how to get the string to uppercase();
// console.log(firstName.toUpperCase());

// // how to get the string to lowerCase();
// console.log(firstName.toLowerCase());



// // how to join the strings:
// const fullName = firstName.concat(lastName);
// console.log(fullName);

// how to get a part of the string:

// const fullName2 = "Aditya Minesh Patil";
// // console.log(fullName2);
// console.log(fullName2.substring(0,6));

// // now I want to only "Patil";
// console.log(fullName2.substring(-5));
// // we cannot do this using substring(); because it does not allows us to use negative indices;

// // but we can use slic method:

// console.log(fullName2.slice(-5));// Patil
// console.log(fullName2.slice(7,13));// Minesh

// /**
//  * what if we got a sentence and want to separate into difference strings and store it into arrays
//  */

// console.log(sentence.split(" "));

// // now what if we want to change the " " to "-" :
// // replace() will replace only at first instance but what if we want to change it all;
// console.log(sentence.replace(" ", "-"));

// // we can use replaceAll() method;
// console.log(sentence.replaceAll(" ", "_"));










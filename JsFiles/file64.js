// Start of object oriented programming;
// Methods;
/**
 * functions inside objects
 *
 */

// const person = {
//   firstName: "Aditya",
//   age: 23, 
//   about: function(){
//     // console.log(`My name is ${this.firstName} and My age is ${this.age}.
//     // I am a dropout and going to start bakery, and going to sell dairy products`);
//     console.log(this)// this will give all the values;
//     console.log(this.firstName);// this will give me only firstName;
//   }
// };// In this the key word "this" will give the values in a perticular object;


// objects are not iterables;
// for(let info of person){
//   console.log(info);
// }

// console.log(person.about);// This will give the whole about function;
// person.about();// This will call the about function and give us the result;


function personInfo(){
  console.log(`My name is ${this.firstName} and my age is ${this.age}`);
};

const person1 = {
  firstName: 'Aditya',
  age: 23,
  tellUs: personInfo,
}

const person2 = {
  firstName: 'Kunal',
  age: 22,
  tellUs: personInfo,
}

const person3 = {
  firstName: 'Harsh',
  age: 22,
  tellUs: personInfo,
}

person1.tellUs();
person2.tellUs();
person3.tellUs();



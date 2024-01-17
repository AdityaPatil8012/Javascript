// Objects in javascript:

// there are two ways we can create a object; 

// usng object literal;

const person = {
  name: "Aditya",
  age: 23,
  skill: "web-development",
}

// we can also create a object using object constructor;

const car = new Object();

car.brand = "Toyota"
car.model = "camry";
car.year = 2023;

// console.log(person);
// console.log(car);


// what if we want to change the value;

person.skill = "frontend-development";
// console.log(person);

// what if I want to add one more property and it's value;

person.education = "Engineering Dropout";

// console.log(person);

// what if I want to delete some property from the object;

delete person.age;

// console.log(person);

// Now, what can we do to get only the object keys;

let keys = Object.keys(person);
// this will give us only the keys from the object;
// console.log(keys);

// what if we want only the values from the object;

let values = Object.values(person);
// this will give us only the values from the objects;
// console.log(values);

// how about I want keys and values in form of arrays;

let entries = Object.entries(person);
// console.log(entries);

// how to join the two abjects;
// there are two way we can do this 

// one: using assign operator;
let obj = Object.assign({}, person, car);
console.log(obj);


// two: using spread operator;
let join = {...car, ...person};
console.log(join);








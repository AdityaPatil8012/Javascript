// difference between dot and bracket notation;

const key = "email";
const person = {
  name:"Aditya",
  age:22,
  "Person hobbies": ["guitar", "Sleeping", "listening"]
};

// we can not access Person hobbies using dot notation;

// console.log(person.name);
// console.log(person["Person hobbies"]);

// you can add the varaible in the [].
person[key] = "aadityapatil8012@gmail.com";
console.log(person);
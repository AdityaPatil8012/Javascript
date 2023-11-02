// Maps;

/**
 * map is a iterable
 * store data in ordered fashion
 * duplicate keys are not allowed likes objects
 * 
 * different between maps and objects
 * objects can only have string or symbol as key
 * 
 * im maps you can use anything as key
 * like array, number, string;
 * 
 */


// object literal;
// keys are in string and symbol;

const person = {
  firstName: "Aditya",
  age: 23,
  1: 'one',
}

const userInfo = new Map();
userInfo.set(person, {gender: "male"});
console.log(userInfo);


// We can store any data in keys while using Map method;
// const person2 = new Map();
// person2.set('firstName', 'Aditya')
// person2.set('age', 23);
// person2.set(1, 'one');
// person2.set([23],23);
// console.log(person2);
// console.log(person2.get(1));
// console.log(person2.keys());

// how to print values of the keys;
// console.log(person2.get('firstName'));

// how to print just keys while using Map();
// console.log(person2.keys());

// how to iterate all the keys;
// for(let key of person2.keys()){
//   console.log(key);
// };

// Now lets see how to get both keys and thier values;

// for(let [key, value] of person2){
//   console.log(key, value);
// };

// how to use Map method where we can store the keys and it's values in same line;

// const person = new Map([['firstName', 'Aditya'],['age', 23],[1, 'one']]);
// console.log(person);









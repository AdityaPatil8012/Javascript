// destructing of the objects;

const person = {
  FirstName: "Aditya",
  age: 23,
  skill: "web-development",
}

// now let's see how we can freeze the object so that it will not change;

// Object.freeze(person);

// this will not change anything in the object;
// person.FirstName = "Kunal";
// delete person.FirstName;
// console.log(person);

// console.log(person);

// how to check the property is there or not in the object;

let check = person.hasOwnProperty("age");
// console.log(check);

// now I want to seal the object which means no changes;

// After this changes in the object will not be applied;
// Object.seal(person);

// delete person.FirstName;

// console.log(person);



// Now let's learn about object deconstruction;

console.log(person);

// { FirstName: 'Aditya', age: 23, skill: 'web-development' }

// What is we want to get the values from an object;
console.log(person.FirstName);
console.log(person.age);


// now this is how we can deconstructe an object;
// this will make things simpler;
let {FirstName: naam, age, skill} = person;
console.log(naam);
console.log(age);
console.table([naam, age, skill]);

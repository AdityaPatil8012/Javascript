// Array and it's properties and methods;
// learn about imp array methods;
// (isArray, from, of) are other imp methods;

// how to create an array;

// create a array using array literal;
const friends = ["Madan", "Jayraj", "Harsh"];


// create a array using array constructor;
const family = new Array("Mom", "Dad", "Sister");

console.log(family);


// we can access the array using indices 

// Start from 0 index;
console.log(friends[2]);// Harsh;

// we can also modify the values in an array accessing index;
friends[2] = "Shivram";

console.log(friends); // [ 'Madan', 'Jayraj', 'Shivram' ]

// what if we want to add one element in an array;
// we can use push() method;
friends.push("Nandan");
console.log(friends); // [ 'Madan', 'Jayraj', 'Shivram', 'Nandan' ]

// What if you want to remove a friend from last index;
// we can use pop() method;
friends.pop();
console.log(friends); // [ 'Madan', 'Jayraj', 'Shivram' ]


// we can also add or remove element from an array using shift() and unshift();

// using unshift() method to add the element at the begining of the array;
friends.unshift("Kunal");
console.log(friends); // [ 'Kunal', 'Madan', 'Jayraj', 'Shivram' ]

// using shift() to remove the element from the array;
friends.shift();
console.log(friends); // [ 'Madan', 'Jayraj', 'Shivram' ]

// how to get only certain elements from an array;
// slice() will not change the original array but gives the copy of new array with that particular part;
let uncertainFriends = friends.slice(1,3);
console.log(uncertainFriends); // [ 'Jayraj', 'Shivram' ]
console.log(friends); // [ 'Madan', 'Jayraj', 'Shivram' ]

// splice() method will change the exiting array of an element;

// now let's delete an element from the middle of the array and see;

// (index, how much to delete, add elements);
friends.splice(1, 1, "Harsh");
console.log(friends); // [ 'Madan', 'Harsh', 'Shivram' ]

// here I have deleted shivram from the array and added a new array family instead;
friends.splice(2,1, ...family);
console.log(friends); // [ 'Madan', 'Harsh', 'Mom', 'Dad', 'Sister' ]

// check wheather the element is present or not;
// we can use includes() method;
console.log(friends.includes("Sister")); // true;
console.log(friends.includes("Brother")); // false;


// Ok, now let's learn about concat();

const inDoorSport = ["chess", "snakesAndLadder", "ludo"];
const outDoorSport = ["cricket", "football", "basketball"];
const randomSport = ["hideAndSeek", "MountainAndRiver"];

// now let's say that you want to join this two arrays;
// we can do this using concat() or spread operator;

const sports = inDoorSport.concat(outDoorSport, randomSport);
console.log(sports);

// most programers use spread operator
// we can also use spread operator;
const allSports = [...inDoorSport, ...outDoorSport, ...randomSport];
console.log(allSports);


// how to find the index of an element in an array;
// we can use indexOf() method to find the index;
console.log(allSports);
console.log(allSports.indexOf("basketball"));


// Now we have the index of the element but wants to know the value;
// we can use array.[] to get the value;

console.log(allSports[allSports.length-2]);

// let's see we can use at() method to get the value;

console.log(allSports.at(4)); // football

// As we see, we can use [] and at() method to get the element from the array;


// .forEach((return function));
// we can iterate or loop an array using .forEach method; 
allSports.forEach((sport)=>{
  console.log(sport);
})

// We can also use for of loop and for in loop ;

for(let sport of allSports){
  console.log(sport);
}

for(let sport in allSports){
  console.log(sport);
}

// lets see some more methods;

let numbers = [13, 14, 16, 21, 22, 23, 24];

// find method will return only one  value if satisfied;
let olderThen18 = numbers.find((num)=>{
  return num >= 18; 
})

console.log(olderThen18);
// console.log(numbers);

// check the array don't return the value;

// this will only check the give condition is true or false;
// some method will only return true if only one element satisfies the condition;
let olderThen18IsTrue = numbers.some((num)=>{
  return num >= 18;
})
console.log(olderThen18IsTrue); // true;

// every method will check wheather all the elements satisfies the given condition and then return true or false;
// now let's check whether all the values in an array satisfies the condition;
let checkAllTheElements = numbers.every((num)=>{
  return num >= 12;
})

console.log(checkAllTheElements);



// Now let's say that I want all the satisfied value;
// we can use filter method but it will create a new array;


let AllOlderThen18 = numbers.filter((num)=>{
  return num >= 18;
})
console.log(numbers);
console.log(AllOlderThen18);
console.log(numbers);


// this will run the function for each element in an array;

let findSquareOf = numbers.map((num)=>{
  return num ** 2;
})

console.log(findSquareOf);

// let's use the math method for getting the values;

let squareRootOf = numbers.map((Math.sqrt));
console.log(squareRootOf);

// now get the value but restrict to 2 decimal points;


let uptoTwoDecimalValue = squareRootOf.map((num)=>{
  return num.toFixed(2);
})

console.log(uptoTwoDecimalValue);


// Now I want to add all the numbers;
// we can use reduce method;

let sumOf = numbers.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue;
}, 0);
console.log(numbers);
console.log(sumOf);

// what if we have string values in a array;

let friends = ['Madan', 'Jayraj', 'Harsh'];

let totalFriends = friends.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue;
}, 0);
console.log(friends);
console.log(totalFriends);

// now what if I want to sort the array in assending order;

let randomNumber = [34, 45, 12, 35, 67, 56, 23, 26, 32];
// we can use sort method to sort array Alphabetically and in assending order for numbers;
let sortedNum = randomNumber.sort();
console.log(sortedNum);

// we can use sort method to sort the array in reverse;
let sortInReverse = randomNumber.reverse();
console.log(sortInReverse)

// we can add new element in an array using of method; 

let firstName = "Aditya";
let MiddleName = "Minesh";
let lastName = "Patil";

const fullName = Array.of(firstName, MiddleName, lastName);
console.log(fullName);


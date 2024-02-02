// let's learn about this and new keyword in detail;

// new keyword is used to create a new instance of an object;

// mostly used to create a instance of the constructor function;

function person(name, age) {
  name = name;
  age = age;
}

const user1 = new person("Aditya", 22);

console.log(user1);
// here this will give us an empty object;

// therefore we use this. before creating a constructor function;

function user(name, age){
  this.name = name;
  this.age = age;
}

// now this will give us a new object;
const user2 = user("harsh", 21);

// it will give us undefined because we are not creating new instance to store our values;
console.log(user2); // undefined; 

// by using new keyword it will create a new object instance;
// and when we add the arg in the user constructor function it will store the value;
// it will store the correct value because we are using "this." property;

const user3 = new user("Kunal", 21);
console.log(user3);


// now let's create a function that will say hello (name of the person);

function greet(name){
  this.name = name;
  this.hello = function(){
    console.log(`hello ${this.name}`);
  }
}

const user4 = new greet("Jayraj");

user4.hello();


// this

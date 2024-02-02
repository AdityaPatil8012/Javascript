// let's learn about call keyword;

// for this let's create a function that will set user name;

function setUserName(userName){
  this.userName = userName;
}

// now let's create a constructor function which will take user name, password, email;

function user(userName, password, email){
  // how add a user name use the setUserName function;
  setUserName.call(this,userName);
  // when we create a object using class constructor, we can use super() to get the values from the parent functions; 

  this.password = password;
  this.email = email;
}

// now let's create a new object using this constructor function;

const user1 = new user("Aditya", 123, "Adi@gmail.com");

console.log(user1);


// let's do some more exercises;

function sayHello(){
  console.log(`hello ${this.name}`);
}

const person = {
  name: "Aditya"
}

sayHello.call(person);

// we can use call to borrow methods from other objects;

const Aditya = {
  name: person.name,
  age: 23,
  greet: function(){
    console.log(`Good-Afternoon ${this.name}!!`);
  }
}

console.log(Aditya);

const kunal = {
  name: "kunal",
  age: 22, 
}

// Aditya.greet.call(kunal);
// let's see how we can borrow the greet method from Aditya to Kunal;

Aditya.greet.call(kunal); // output: Good-Afternoon kunal!!

/**
 * summary: 
 * we can use call to borrow methods from other object;
 * this is the only 
 */

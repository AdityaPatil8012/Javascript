// using prototype;
// __proto__ or [[prototype]] and prototype do every different thing in javascript program;
/**
 * __proto__ connects one object to another object and we can use the values of the connected object in the current object; 
 * And prototype works only for the functions 
 * 
 *
 */

createUser.prototype.info = function(){
    console.log(`Name: ${this.firstName} ${this.lastName}. Age is ${this.age} and email is ${this.email}`)
};

function createUser(firstName, lastName, age, email){
  // const usre = Object.create(createUser);// this is how we create object using
  // const user = Object.create(createUser);// this is how we connect the prototype
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email; 
  // return user;
}

// console.log(createUser.prototype);
const user1 = new createUser('Aditya', 'Patil', 23, 'aadityapatil8912@gmail.com');
// console.log(user1);
// console.log(user1.info());
console.log(user1.info());








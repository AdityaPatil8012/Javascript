createUser.prototype.info = function(){
  console.log(`Name: ${this.firstName} ${this.lastName}. Age is ${this.age}`)
};

function createUser(firstName, lastName, age, email){
const usre = Object.create(createUser);// this is how we create object using
const user = Object.create(createUser);// this is how we connect the prototype
user.lastName = lastName;
user.age = age;
user.email = email; 
user.firstName = firstName;
return user;
}


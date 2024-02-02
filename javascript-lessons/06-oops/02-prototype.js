// now let's learn about prototype;

// to learn prototype let's first create a object literal; 

function user(userName, userAge){
  this.name = userName;
  this.age = userAge;
}

// the prototype will add the sayHello method to the user constructor function; 
// create a property that will say hell (user-name);
user.prototype.sayHello = function(){
  console.log(`hello ${this.name}`);
};
  
// create a property that will display the name and age of the user;
user.prototype.displayUsersAge = function(){
  console.log(`${this.name}'s age is ${this.age}`);
} ; 


// now let's create new object with "user" as it's prototype;
const user1 = new user("Aditya");


// now let's access the property userName;

user1.sayHello("Aditya");


// now let's create a new user and log the age of that user;
const user2 = new user("kunal", 21);

// now display the age of the user;
user2.displayUsersAge();

console.log(user1 instanceof user);





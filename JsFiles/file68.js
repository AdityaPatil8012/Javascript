// proto, prottype, class;

// const user = {
//   firstName: 'Aditya',
//   lastName: 'Patil',
//   age: 23,
//   email: 'aadityapatil8023@gmail.com',
//   about(){
//     console.log(`My name is ${this.firstName} ${this.lastName} and my age is ${this.age} and My mail address is ${this.email}.`)
//   }
// }

// user.about();

/**
 * function (that function create object
 * add key value pair
 * return the object
 */
function createUser(firstName, lastName, age, email){
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.email = email; 
  user.about = function(){
    return `${this.firstName} ${this.lastName}, age is ${this.age}, and email is ${this.email}`; 
  }
  return user;
}

const user1 = createUser('Aditya', 'Patil', 23, 'aadityapatil8023@gmail.com');
console.log(user1);
const about = user1.about();
console.log(about);


 

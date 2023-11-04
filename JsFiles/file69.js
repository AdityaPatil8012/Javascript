
// const info = {
//   about: function(){
//       return `${this.firstName} ${this.lastName}, age is ${this.age}, and email is ${this.email}`; 
//     }
// }




// function createUser(firstName, lastName, age, email){
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.age = age;
//   user.email = email; 
//   user.about = info.about;
//   return user;
// }

// const user1 = createUser('Aditya', 'Patil', 23, 'aadityapatil8023@gmail.com');
// console.log(user1);
// const user2 = createUser('harsh', 'kolhi', 22, 'harshkohil@gamil.com')
// console.log(user2);

// const about = user1.about();
// console.log(about);

// console.log(user2.about());


const obj1 = {
  key1: "value1",
  key2: "value2",
}

// const obj2 = {
//   key3: "value3",
// }

const obj2 = Object.create(obj1);// this is another way of creating object;

// console.log(obj2);

obj2.key3 = 'value3';
console.log(obj2.key3);
console.log(obj2.key1);
console.log(obj2.__proto__);

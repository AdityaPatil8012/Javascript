 /**
 * function (that function create object)
 * add key value pair
 * return the object
 */

const userDetail = {
  detial: function(){
    return `Name: ${this.firstName} ${this.lastName}. Age is ${this.age}. Email address is ${this.email}`
  },
  hobbies: function(){
    return `My hobby is playing games in free time`
  }
}

 function userInfo(firstName, lastName, age, email){
  const user = Object.create(userDetail);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.email = email;
  return user;
 }

 const user1 = userInfo('Aditya', 'Patil', 23, 'aadityapatil8021@gmail.com');
// console.log(user1);

console.log(user1.__proto__);

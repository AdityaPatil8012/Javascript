// Object inside array
// very useful in real world applications 

const users = [
  {userId: 1, fristName: "Aditya", gender: "male"},
  {userId: 2, fristName: "Kunal", gender: "male"},
  {userId: 3, fristName: "Harsh", gender: "male"}
]
// this is print all the array items; 
// console.log(users);

// this will give all the objects stored in the array
// for(let user of users){
//   console.log(user);
// } 


// this is how we assign the objects in the array;
// let [user1, user2, user3] = users;
// Now this will give you all the indiviuals items
// console.log(user1.userId);
// console.log(user1.fristName);


// let [{fristName}, {userId}, {gender}] = users;
// console.log(fristName);
// console.log(gender);
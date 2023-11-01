// find method;

/**
 * find method will return the first value that
 * satisfies the condition;
 * And it is a boolean value.
 */

// const myArray = ["hello", "cat", "dog", "kick"];

// const isLength3 = myArray.find((String)=>{
//   return String.length === 3;
// });

// console.log(isLength3);

const users = [
  {userId: 1, userName: "Aditya"},
  {userId: 2, userName: "Harsh"},
  {userId: 3, userName: "Jayraj"},
  {userId: 4, userName: "kunal"},
  {userId: 5, userName: "Shivram"},
]


// const findId = users.find((num)=>{
//   return num.userId === 3;
// });

const findUser = users.find((myUser)=>myUser.userId===4);

console.log(findUser);


// Map method;
// we can use map method creates new array, we can use this method for making array of exciting array;
// const num = [2, 4, 5, 6, 8];

// const addNum = function(num){
//   return num+4; // while using map method we should always return;
// }
// this will create new array add excute the addNum function, and this new array will be stored in addNums;
// const addNums = num.map(addNum);

// console.log(addNums);

// const addNum = num.map((number)=>{
//   return number*number;
// });

// console.log(addNum);

const users = [
  {firstName: "Aditya", age: 23},
  {firstName: "Kunal", age: 22},
  {firstName: "Harsh", age: 22},
  {firstName: "Jayraj", age: 23},
];

// this is how we can create new array of existing array;
const onlyName = users.map((user)=>{
  return user.firstName;
})

console.log(onlyName);

const onlyAge = users.map((ageOf)=>{
  return ageOf.age;
})

console.log(onlyAge);
// very Important Array Methods

// foreach method 
/**
 * forEach method works as a normal for loop which iterates one-by-one;
 */

// const numbers = [2, 4, 5, 8];

// function multiplyBy2(number, index){
//   const value = number*2;
//   console.log(`index is ${index} and value is ${value}`)
// }

// for(i=0; i<numbers.length; i++){
//   multiplyBy2(numbers[i], i);
// }


// when we use forEach function, we don't use "return parameter"
// numbers.forEach(multiplyBy2);

// In this the function is annonymous funtion which means it does not have name;
// numbers.forEach(function(num, index){
//   const value = num*3;
//   console.log(`index is ${index} and value is ${value}`)
// })

// convert this function into arrow function;
// numbers.forEach((num, index)=>{
//   const value = num*4;
//   console.log(`index is ${index} and value is ${value}`)
// })

const users = [
  {firstName: "Aditya", age: 23},
  {firstName: "Kunal", age: 22},
  {firstName: "Harsh", age: 22},
  {firstName: "Jayraj", age: 23},
];

users.forEach(
  (user)=>{
    console.log(`My name is ${user.firstName}`)
  }
)

// we can also use for of loop;

for(let user of users){
  console.log(user.firstName);
}

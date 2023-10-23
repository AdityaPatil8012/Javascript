// arrow functions


let happyBirthday = () => {
  console.log("happy birthday to you...")
}

happyBirthday();

const happyBirthday2 = () => {
  return "happy birthday to you Aditya"
}
console.log(happyBirthday2());

// Create a function which gives the sum of two numbers;

// const sumOf = (num1, num2) => {
//   return num1 + num2;
// }

// const returnSum = sumOf(3, 4);
// console.log(returnSum);

// create a function which gives the sum of three numbers;

const sumOfThree = (num1, num2, num3) => {
  return num1 + num2 + num3;
} 

const returnSum = sumOfThree(3, 5, 6);
console.log(returnSum);


// Now create a function which gives true when even.

const isEven =(num) => {
  if(num%2===0){
    return "Given number is even";
  }else{
    return "Given number is odd";
  }
}

const value = isEven(6);
console.log(value);

// create a function in which gives first letter;

// function firstLetter(name){
//   return name[0];
// }
// const Ans = firstLetter("Aditya");
// console.log(Ans);


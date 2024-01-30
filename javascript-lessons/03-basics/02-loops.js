// // write a loop that prints from 1 to 10;

// for(let i = 1; i<=10; i++){
//   console.log(i);
// }

// // sum of numbers from 1 to 100;
// let sum = 0;
// for(let i = 1; i<=100; i++){
//   sum = sum + i;
//   // this will give all the values;
//   console.log(`sum of ${i} = ${sum}`);
// }
// // this will only give the total value;
// console.log(sum);

// // Write a loop that prints only the odd numbers from 1 to 20.

// for (let i = 1; i < 21; i++) {
//   if(i%2 !==0){
//     console.log(i);
//   }
// }

// // Write nested loops to create a multiplication table for numbers from 1 to 5.

// for(let i =1; i<=5; i++){
//   for(let j =1; j<=10; j++){
//     let value = i * j;
//     console.log(`${i} * ${j} = ${value}`);
//   }
// }

// // Write a loop that prints the numbers from 1 to 30. 
// // For multiples of three, print "Fizz" instead of the number. 
// // For multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."

// for(let i = 1; i<=30; i++){
//   if(i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
//   } else if(i % 5 === 0){
//     console.log("Buzz");
//   } else if(i % 3 === 0){
//     console.log("Fizz");
//   } else{
//     console.log(i);
//   }
// }


// Write a loop that takes a string and prints it in reverse.

let fullName = "Aditya Minesh Patil"

let reverse = fullName.split("").reverse().join("");
console.log(reverse);





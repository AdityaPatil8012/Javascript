// setTimeout();
// setInterval();
// callback function;
// console.log('script start');

// setTimeout(() => {
//   console.log('inside the function');
// }, 1000);

// console.log('script end');


// console.log('Start');

// setInterval(()=>{
//   console.log('hello Adi');
// }, 5000);

function giveNumAndAdd(num1, num2, callback){
  console.log(`Number1: ${num1}
Number2: ${num2}`);
  callback(num1, num2);
}

function addTwoNumbers(num1, num2){
  // console.log(num1+num2);
  console.log(`Total Sum is:`,num1+num2);
}

giveNumAndAdd(2,4,addTwoNumbers);


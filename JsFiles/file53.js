// filter method;
/**
 * In this the function should always return a boolean value
 */

const numbers = [2, 4, 5, 7, 9];

const ans = numbers.filter((number)=>{
  return number%2==!0;
})

console.log(ans);
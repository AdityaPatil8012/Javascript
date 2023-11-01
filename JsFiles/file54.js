// reduce method;

/**
  this method will give the sum of all the values;
  
  accumulator    currentValue    return
  2              4               6
  6              5               11 
  11             7               18
  18             8               26
 */

const numbers = [2, 4, 5, ,7 ,8];

const sum = numbers.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue;
})

console.log(sum);


const userCart = [
  {productId: 1, productName: "mobile", price:12000},
  {productId: 2, productName: "monitor", price:23000},
  {productId: 3, productName: "camera", price:16000}
]
// In this we have put the intial value to be 0;
// When we put the intial value 0, it will start the count from 0 i.e the accumulator is 0;
const totalValue = userCart.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue.price;
}, 0)

console.log(totalValue);



// every method;

/**
 * every method will return either true or false;
 * when it satisfies the condition 
 */

// const numbers = [2, 4, 6, 44, 8];

// const isEven = numbers.every((num)=>num%2 ===0);

// console.log(isEven);

const userCart = [
  {productId: 1, productName: "mobile", price:12000},
  {productId: 2, productName: "monitor", price:23000},
  {productId: 3, productName: "camera", price:16000}
]

const isLess = userCart.every((less)=>less.price<30000);

console.log(isLess);
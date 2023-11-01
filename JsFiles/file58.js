// some method;

// const numbers = [1, 3, 5, 9, 7, 11];

// const isEven = numbers.some((number)=>number%2===0);

// console.log(isEven);

const userCart = [
  {productId: 1, productName: "mobile", price:12000},
  {productId: 2, productName: "monitor", price:23000},
  {productId: 3, productName: "camera", price:16000},
  {productId: 3, productName: "camera", price:160000}
]

const isGreater = userCart.some((amount)=> amount.price > 100000);

console.log(isGreater);
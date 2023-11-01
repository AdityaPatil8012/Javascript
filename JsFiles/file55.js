// Sort method;

// sort method will change the array, but reduce, forEach, filter,
// map will not change the array, It will give us a new array;

// const numbers = [2, 55, 343, 33, 1200, 3000]; 

// numbers.sort((a,b)=>{
//   return b-a;
// })

// console.log(numbers);

const products = [
  {productId:1 , productName:"p1", price: 600},
  {productId:2 , productName:"p2", price: 550},
  {productId:3 , productName:"p3", price: 2000},
  {productId:4 , productName:"p4", price: 1200},
]

const lowToHigh = products.sort((a,b)=>{
  return a.price-b.price;
});

console.log(lowToHigh);

const HighToLow = products.sort((a,b)=>{
  return b.price-a.price;
});

console.log(HighToLow);
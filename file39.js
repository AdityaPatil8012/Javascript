// spread operator for array;

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const newArray = [...array1 , ...array2];
// console.log(newArray)

// spread operator for objects;

// const obj1 = {
//   key1:"value1",
//   key2:"value2",
// }


// we can use spread operator to convert array or string to object;

const num = ["one", "two", "three", "four"];
const newObj = {
  ...num
}
console.log(newObj);

// we can do similar for strings also;

// const obj2 = {
//   key3:"value3",
//   key4:"value4",
// }

// const newObj = {
//   ...obj1, ...obj2
// }
// console.log(newObj);

// for(let info in newObj){
//   console.log(newObj[info]);
// }

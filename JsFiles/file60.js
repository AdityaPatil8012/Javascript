// splice method;
// start, delete , insert;

const myArray = ["item1", "item2", "item3"];

// const newArray = myArray.splice(1,1);
// console.log(myArray);

const deletedItem = myArray.splice(1, 1, "inserted2");
console.log(myArray);
console.log(deletedItem);


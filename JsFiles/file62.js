/**
 *  Sets (it is iterables);
 * store data;
 * sets also have its own methods
 * No index-based access;
 * Order is not guaranteed;
 * Unique items only(no duplicates allowed)
 */


// how to declare set;

// const items = new Set();
// items.add(3);
// items.add(['itme1','item2']);
// items.add(2);

// if(items.has(1)){
//   console.log("Items have no. 1")
// }else{
//   console.log("Items don't have no.1")
// }
// console.log(items);

// When to use sets;
// When we have unique values and the values can't be repeated;

// eg. user Ids 

// const ids = new Set();
// ids.add(2512);
// ids.add(2513);
// console.log(ids);

const myArray = [1,3, 4, 5, 6, 3, 5, 4];

const onlyOneTime = new Set(myArray);
console.log(onlyOneTime);
// console.log(myArray);
// console.log(myArray[myArray.length-4]);

// fill method;
// We can use fill method when we want to fill some value 
// in place of other value in array;
// value , start , end ;

const numbers = [11,22,34,46,58,69,74,89,91];

const removeItems = numbers.fill(10, 2, 6);// (value, start, end);

console.log(removeItems);

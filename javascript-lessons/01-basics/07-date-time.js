// Date and time in javascript;

// Date is an object 

// this is one way of creating new date in javascript;
let currentTime = new Date();
// console.log(currentTime);

// date is an object;
// console.log(typeof currentTime);

// but want if you want to specify the date in javascript;

let dateAndTime = new Date("2024-01-15");
// console.log(dateAndTime);


// What are the things that we can specify;
// (year, month, day, hour, minute, second, millisecond)

let dateAndTime1 = new Date(2024, 0, 15, 12);
// console.log(dateAndTime1);

// now let's see how we can get the date and time from the Date()

// console.log(currentTime.getFullYear()); 
// console.log(currentTime.getMonth());
// console.log(currentTime.getDate());
// console.log(currentTime.getHours());

// Now let's say that we want to set the date, how can we do that;

let year = currentTime.setFullYear(2023);

console.log(year.toLocaleString());
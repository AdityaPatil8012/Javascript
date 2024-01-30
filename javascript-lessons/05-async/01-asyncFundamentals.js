// let's learn all the async methods;

// 1. setTimeout(callback, delay-time) ;
const helloWorld = setTimeout(() => {
  console.log("hello world");
}, 5000);

// 5000 represents 5000 milli second;
// this method will run this code after 5000 milli second;

// 2. setInterval(callback, delay);

const helloAdi = setInterval(() => {
  console.log("Hello Aditya");
}, 2000);

// this will stop the helloWorld from running;
clearTimeout(helloWorld);

// this will stop the helloAdi from running;
clearInterval(helloAdi);











// hoisting 


// this is happening because of the hoisting:
// even if we call the hello() before declaration this will work

// hello();

// function hello(){
//   console.log("hello World");
// }

// 

// hello();

const hello = function(){
  return console.log("hello World");
}

console.log(hello);
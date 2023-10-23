// call back function;

// function myFunc(a2){
//   console.log("hello there I am a func and I can...");
//   a2("Aditya");
// }

// function myFunc2(name){
//   console.log("inside myFunc2");
//   console.log(`My name is ${name}`)
// }

// myFunc(myFunc2);  

// function returning function;

function myFunc(){
    function hello(){
      return "Hello World";
    }
    return hello;
}

const ans = myFunc();
console.log(ans());




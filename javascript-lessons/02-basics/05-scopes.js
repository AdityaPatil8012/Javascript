// In javascript there are two types of scope;

// Global scope and Local scope;


// Global scope;

let globalScope = "I am a global variable";


// 
function print(){
  // this is a local scope;
  let localScope = "I am a local variable";
  console.log(localScope);
  console.log(globalScope);
  // you can access localScope here only not outside of this;
}


// print();

// this will give us error because localScope is not present in global scope;
// console.log(localScope); 

// but we can access the globalScope because it is a Global Scope;

// console.log(globalScope);


// Block Scope;
// the "let" and "const" keyword are used to declare the variable in block;

if(true){
  let blockScope = "I am a block Scope";
  console.log(blockScope);
}

// this will throw us an error;
// console.log(blockScope);


// lexical scope;
// If a variable is declared inside a function, 
// it will have access to its own scope and
// the scope of all outer functions (including global scope).


// hoisting says that we should alway try to declare the variable before 
// using it, first declare it and then use it;


console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

function exampleFunction() {
  console.log(localVar); // Error: Cannot access 'localVar' before initialization
  let localVar = "I am not hoisted";
}

exampleFunction();

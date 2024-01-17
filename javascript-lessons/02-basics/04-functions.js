// let's see how we can create functions;

// function declaration;

function greet(name){
  console.log(`hello ${name}!`);
}

// greet('Aditya');
// greet("Harsh");

// we can also declare function using variable;
// here we are storing the function into variable;
let greetAgain = function(name){
  console.log(`Hello again ${name}`);
}

// greetAgain('kunal');

// now let's create a function which adds two values;

function sumOf(num1, num2){
  return num1 + num2;
}

// (sumOf(3,6));

// Now let's see how to write higher order function;

let productOf = (num1, num2)=>{
  return (num1*num2);
}

// productOf(2,4);


// Now let's create one higher order function;


let calculationOf = (num1, num2, fn)=>{
  console.log(fn(num1,num2));
}

calculationOf(2,4,productOf);
calculationOf(2,4,sumOf);


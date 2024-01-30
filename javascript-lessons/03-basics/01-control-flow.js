// control flow;

/**
 * 1. Sequential Execution;
 * javascript executes the code in sequence from top to bottom;
 */

console.log("j 1");
console.log("step 2");
console.log("step 3");

/**
 * Output;
 * 
    step 1
    step 2
    step 3
 */

// Conditional Statements:

let x = 10;

if(x > 0){
  console.log("positive");
} else if(x < 0){
  console.log("negative");
}else{
  console.log("zero");
}

// output: positive;


// now let's learn switch statement;

let day = "monday";

switch(day){
  case "monday":
    console.log("Start of the weak");
    break;
  case "friday":
    console.log("Weakend is coming");
    break;
  case "sunday":
    console.log("Enjoy the weakend");
    break;
  default:
    console.log("In the middle of the weak");      
}


// let's learn about the loops now;
// print the numbers from 1 to 10; 
for (let i = 1; i <= 10; i++) {
  const element = i;
  console.log(element);
}

// do the same using while loop;
// we can use while loop when we don't know how many times we are going to iterate the loop;
let i = 11;
while (i <= 20) {
  console.log(i);
  i++
}

// do the same using do while loop;
// this will print 31; and then stop;
let j = 31;
do {
  console.log(j);
  j++
} while (j <= 30);



// lexical scope;
/**
 * In lexical scope when we called fuction the program checks the called fuction in the same scope, if not 
 * found, then in parent scope and lastly in globelly scope. 
 */

function myApp(){
  const myVar = "value1";
  function myFunc(){
    const myVar = "value3"
    console.log("inside my function", myVar)
  }
  console.log(myVar);
  myFunc();
  const myFunc2 = function(){}
  const myFunc3 = () => {}

}

myApp(); 
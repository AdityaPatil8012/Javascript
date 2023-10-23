// function inside function;

const app = () => {

  const myFunc = () => {
    console.log("hello from myFunc");
  }
 
  const sum = (num1, nmu2) => {
    return num1+nmu2;
  }
  console.log("inside app")
  const sumOf = sum(2,5);
  myFunc();
  console.log(sumOf)
  
}

app();
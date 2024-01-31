// let's learn about promises in detail;

/**
 * A promise is created using the constructor and using "new" keyword
 * In the promise we add function called executor;
 * In this executor we pass two arg (resolve, reject);
 */

// let's create a new promise;

const myPromise = new Promise(function(resolve, reject){
  // Asynchronous operation (e.g fetching data, reading a file)
  // If successful, call resolve with the result;
  // If an error occurs, call reject with the error;
});

/**
 * Now let's see the promise states;
 * 
 * 1. Pending: the initial state, before the promise is resolved or rejected;
 * 2. fulfilled: the operation completed successfully, and the promise has a resulting value;
 * 3. Rejected: the operation failed, and the promise has an error;
 */

// Consuming promises:

/**
 * Promises are consumed using the .then() method, which is called when
 * promise is fulfilled and .catch() method, when the promise is rejected;
 */

// let's create some promise and get the values;

// const myPromise2 = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     console.log("Hello World");
//     resolve("hello Aditya");
//   }, 1000);
// })

// myPromise2.then((data)=>{
//   console.log('resolve');
//   console.log(data);
// })

// here we have to add resolve() to connect the promise to the .then() method;

// let's learn about promise chaining;

// but if you want to store the data we have to declare the variable outside;

let response;

const promiseFive = new Promise((resolve, reject)=>{
  // now let's add some async function;
    setTimeout(function(){
    let error = false;
    if(!error){
      resolve({userName: 'Harsh', userId: 65, userStatus: "Pass", password: 123})
    }else{
      reject("ERROR: something went wrong");
    }
  },1000)
})

promiseFive
.then((abc)=>{
  console.log(abc);
  return abc.userId;
})
.then((data)=>{
  // console.log(userName);
  response = data;
});

setTimeout(()=>{
  console.log(response);
},2000)
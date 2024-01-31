// // let's learn about some promises now;

const { response } = require("express");

// // let's see how we can create a promise;

// const promiseOne = new Promise(function(resolve, reject){
//   // do any async tasks 
//   // DB calls, cryptography, network
//   setTimeout(() => {
//     console.log("Async task is complete");
//     resolve();  
//   }, 1000);

// })

// promiseOne.then(function(){
//   console.log("promise consume");
// })


// // now let's do it in more simpler way;

// new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     console.log("task 2 is done");
//     resolve();
//   },3000)
// }).then(()=>{
//   console.log("resolve");
// })

// // let's create promiseThree;

new Promise(function(resolve, reject){
  // let's do the async task here;
  setTimeout(function(){
    console.log("task 3 is complete");
    resolve({userName: 'Aditya', userId: 63, userStatus: "Pass"});
  },5000)
}).then(function(userinfo){
  console.log("resolve task 3");
  console.log(userinfo);
})


// // let's create promiseFour;

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({userName: 'Kunal', userId: 64, userStatus: "Pass"})
    }else{
      reject("ERROR: something went wrong");
    }
  },7000)
})

promiseFour
.then(function(userinfo){
  console.log(userinfo);
  return userinfo.userName;
})
.then((userName)=>{
  console.log(userName);
})
.catch((err)=>{
  console.log(err);
})
.finally(()=>{
  console.log("done");
})

// now let's create promiseFive;

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


async function getData(userinfo){
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

getData();


// now let's see how we can fetch the data from the server;

// async function getAllUsers(){
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();


// now do the samething using .then method;

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
 return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=> console.log(error));
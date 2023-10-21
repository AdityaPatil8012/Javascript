// how to iterate objects

const person = {
  name:"Aditya",
  age:22,
  email: "aadityapatil8012@gmail.com",
  hobbies: ["listening to music", "Sleeping", "watching movies"]
}

// for in loop 

for(let info in person){
  console.log(`${info}: ${person[info]}`);
}


// object.keys
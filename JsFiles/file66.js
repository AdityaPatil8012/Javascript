// call, apply, bind;


const about = function(hobby, favPerson){
  console.log(this.firstName, this.age, hobby, favPerson);
}

const user1 = {
  firstName: 'Aditya',
  age: 23,
}
const user2 = {
  firstName: 'Kuanl',
  age: 22,
}
const user3 = {
  firstName: 'Harsh',
  age: 22,
}

// about.call("reading", "Naval");
// about.call(user1);

// user1.about("reading", "Naval");// This is how we call the function in the object;
// user1.about.call(user2, "sport","Virat kohli");// This is how we can use about function in user2 and user3
// user1.about.call(user3,"Football", "Ronaldo");// even when about as a "key" is not defined using call method;

about.call(user1, "reading", "Naval");// In this we have created one about function and we are using "this" method to return the function in an object;

about.apply(user2, ["sports", "virat kohli"]);// In this we are using array to pass agruments;

const info = about.bind(user1, "Football", "Ronaldo");// This will return a function and we have stored this in info;

info();

const info2 = user1.about.bind(user1);

info2();





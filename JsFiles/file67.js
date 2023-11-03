// we can create direct function in the objects;
// we call the function in the objects "method" in professional term;

const info = {
  firstName: 'Aditya',
  age: 23,
  about(){// this is the short form to create fuctions in objects
    console.log(`My name is ${this.firstName} and my age is ${this.age}`)
  }
}

info.about();

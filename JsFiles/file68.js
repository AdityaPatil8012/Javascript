// proto, prottype, class;

const user = {
  firstName: 'Aditya',
  lastName: 'Patil',
  age: 23,
  email: 'aadityapatil8023@gmail.com',
  about(){
    console.log(`My name is ${this.firstName} ${this.lastName} and my age is ${this.age} and My mail address is ${this.email}.`)
  }
}

user.about();
// Getters and Setters;

class PersonInfo{
    constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    // we can use "get" to create a intense of the method/function;
    get fullName(){
      return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new PersonInfo('Aditya', 'Patil', 23);
console.log(person1.firstName);
console.log(person1.age);
// console.log(person1.fullName());
console.log(person1.fullName);


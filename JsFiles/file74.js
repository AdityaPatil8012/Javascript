// Class keyword;
/**
 * IN Javascript classes are fake
 */

class createUser{ //used class method to create object using constructor;
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email
    }

    about(){
      return `Name: ${this.firstName} ${this.lastName},  Age: ${this.age} and email: ${this.email}`
    }
}

const user1 = new createUser('Aditya', 'Patil', 23, 'aadityapatil8022@gmail.com');

console.log(user1);
console.log(user1.about());

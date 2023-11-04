// example;

class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  eat(){
    return `${this.name} is eating`;
  }

  sleeping(){
    return  `${this.name} is sleeping`;
  }
}

const cody = new Animal('Cody', '4 months old');

// console.log(cody);
// console.log(cody.sleeping());


// this is how we can extend the parent class "Animal" to sub class "Dog";
class Dog extends Animal{
  constructor(name, age, speed){
    super(name, age);
    this.speed = speed;
  }
  
  run(){
    return `${this.name} is running at ${this.speed} km/hr.`
  }
}

const tommy = new Dog('Tommy', 6, 8);
console.log(tommy.run());
// console.log(tommy.eat());
// console.log(tommy.sleeping());







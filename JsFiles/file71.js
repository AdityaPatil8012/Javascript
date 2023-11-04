// prototpye is an object which only works in functions;
// Only function can use prototype properties;

const users = function(){
  console.log(`hello world`);
}

// const users = {
//  hello: console.log(`hello world`),
// }

// users();
// users.helloAdi = 'hello Aditya';
// console.log(users.helloAdi);// this is how we can use function as an object;
console.log(users.prototype);
// this is how we can add key in the prototype;
users.prototype.abc = "abc";
users.prototype.xyz = "xyz";
users.prototype.efg = "efg";
users.prototype.sing = function(){
  return 'lalala';
}

console.log(users.prototype.sing()); // this is now we can use create and use function using prototype property;



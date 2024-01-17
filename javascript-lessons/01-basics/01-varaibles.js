/**
 * const is used to define constant variable;
 * let is use to declare a variable;
 * var is also use to define a constant variable, but we don't use this;
 * don't use var at all;
 * because of issues in block scope and functional scope;
 * 
 * difference between var and let?
 * let respects the scope but var does not respect the scope;
 * 
 */
console.log('hello World');

const accountId = 1234;
let accountEmail = 'aadityapatil80@gmail.com';
var accountPassword = '123@Adi';
let accountState;

console.table([accountId, accountState, accountEmail, accountPassword]);

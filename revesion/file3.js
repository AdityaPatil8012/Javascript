// object;

const { json } = require("express/lib/response");

const info = {
  firstName : 'Aditya',
  lastName: 'Patil',
  Age: 22,
  skills: ['html', 'css', 'javascript', 'tailwindCss', 'react', ],
  education: 'Dropout',
  ['things iLike']: 'watching movies', 
}

// console.log(info);

info.friends = ['harsh', 'jayraj', 'madan'];

// console.log(info);

// console.log(info['firstName']);

// console.log(info);

info['few friends'] = ['harsh', 'jayraj', 'madan'];

// console.log(info['few friends']);

// console.log(info['things iLike']);

// ;

console.log(JSON.stringify(info));

const jsen = JSON.stringify(info);

console.log(JSON.parse(jsen));






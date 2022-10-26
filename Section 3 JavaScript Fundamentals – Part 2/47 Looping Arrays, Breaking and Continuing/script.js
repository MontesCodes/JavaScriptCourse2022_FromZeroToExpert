'use strict';

// const montes = {
//   firstName: 'Montes',
//   lastName: 'Kelly',
//   age: 2037 - 1984,
//   friends: ['Michael', 'Peter', 'Steven'],
// };

const montesArray = [
  'Montes',
  'Kelly',
  2037 - 1984,
  ['Michael', 'Peter', 'Steven'],
];

const types = [];

for (let i = 0; i < 5; i++) {
  console.log(montesArray[i]);
}

for (let i = 0; i < montesArray.length; i++) {
  console.log(montesArray[i], typeof montesArray[i]);
}

for (let i = 0; i < montesArray.length; i++) {
  console.log(montesArray[i], typeof montesArray[i]);
  types[i] = typeof montesArray[i];
}
console.log(types);

for (let i = 0; i < montesArray.length; i++) {
  console.log(montesArray[i], typeof montesArray[i]);
  types.push(typeof montesArray[i]);
}

console.log(types);

const years = [1995, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

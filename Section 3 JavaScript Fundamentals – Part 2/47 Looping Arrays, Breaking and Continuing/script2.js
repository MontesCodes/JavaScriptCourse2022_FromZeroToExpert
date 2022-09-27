'use strict';

const montes = {
  firstName: 'Monties',
  lastName: 'Kelly',
  age: 2037 - 1984,
  friends: ['Michael', 'Peter', 'Steven'],
};
const montes2 = [
  'Montes',
  'Kelly',
  2037 - 1984,
  ['Michael', 'Peter', 'Steven'],
];

const types1 = [];

// for (let i = 0; i < 5; i++) {
//   console.log(montes[i]);
// }

for (let i = 0; i < montes.length; i++) {
  console.log(montes[i], typeof montes[i]);
}

for (let i = 0; i < montes.length; i++) {
  console.log(montes[i], typeof montes[i]);
  types[i] = typeof montes[i];
}
console.log(types);

for (let i = 0; i < montes.length; i++) {
  console.log(montes[i], typeof montes[i]);
  types.push(typeof montes[i]);
}

console.log(types);

const years2 = [1995, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years2.length; i++) {
  ages2.push(2037 - years2[i]);
}
console.log(ages2);

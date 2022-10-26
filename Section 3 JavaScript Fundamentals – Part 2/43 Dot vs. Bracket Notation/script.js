'use strict';
// Arrays - Orders of elements matter
const montesArray = [
  'Montes',
  'Kelly',
  2037 - 1984,
  'frontEndDev',
  ['Michael', 'Peter', 'Steven'],
];
// Objects - orders of elements do not matter
const montes = {
  firstName: 'Montes',
  lastName: 'Kelly',
  age: 2037 - 1984,
  job: 'Training FrontEnd Dev',
  friends: ['Mike', 'Chad', 'Brandon'],
};

console.log(montesArray);
console.log(montes);

console.log(montes.lastName);
console.log(montes['lastName']);

const nameKey = 'Name';
console.log(montes['first' + nameKey]);
console.log(montes['last' + nameKey]);

const interestedIn = prompt(
  'what do you want to know about Montes? Choose between firstName, lastName, age, job, and friends',
);
console.log(montes[interestedIn]);
// If given options are not chosen "if/else"
if (montes[interestedIn]) {
  console.log(montes[interestedIn]);
} else {
  console.log(
    'Option chosen not available! Choose between firstName, lastName, age, job, and friends',
  );
}

montes.location = 'Pompano';
montes['twitter'] = '@montes';
console.log(montes);

// Challenge

console.log(
  `${montes.firstName} ${montes.lastName} has ${montes.friends.length} friends, and his best friend name is ${montes.friends[0]}.`,
);

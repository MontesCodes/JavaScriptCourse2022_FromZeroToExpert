'use strict';

const friends = ['Michael', 'Steve', 'Peter'];

// Add elements to the Array
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Elements from the Array
friends.pop(); // Remove last Element from the Array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Remove the First Element from the Array
console.log(friends);

console.log(friends.indexOf('Steve'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steve'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steve')) {
  console.log('You have a friend Called Steve');
} else {
  console.log('You do not have a friend Call Steve');
}

if (friends.includes('Peter')) {
  console.log('You have a friend Called Peter');
} else {
  console.log('You do not have a friend Call Peter');
}

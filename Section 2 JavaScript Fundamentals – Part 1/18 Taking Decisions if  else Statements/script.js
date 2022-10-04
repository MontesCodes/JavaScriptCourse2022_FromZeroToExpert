'use strict';
const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Sarah can start her driving license.');
// }
if (age >= 18) {
  console.log('Sarah can start her driving license.');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

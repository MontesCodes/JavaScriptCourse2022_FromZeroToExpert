'use strict';

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
  console.log('Cool! 23 is an amazing number!');
}

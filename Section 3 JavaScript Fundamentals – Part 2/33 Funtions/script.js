'use strict';

function looger() {
  console.log('My name is Monties');
}

/// calling / running /invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = 'Juice with ${apples} apples and ${oranges} oranges.';
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 1));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = number('23');
console.log(num);

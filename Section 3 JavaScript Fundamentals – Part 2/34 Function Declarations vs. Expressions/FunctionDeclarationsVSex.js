'use strict';
/// Function declaration - before or after function
const age3 = calcAge1(1984);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1983);
console.log(age1);
console.log(age3);

/// Function exprssion
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

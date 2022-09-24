'use strict';

/// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
/// Arrow function expression
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age2 = 2037 - birthYear;
  const retirement2 = 65 - age2;
  //   return retirement2;
  return `${firstName} retires in ${retirement2}
years`;
};

console.log(yearsUntilRetirement2(1991, 'Montes'));
console.log(yearsUntilRetirement2(1991, 'Bob'));

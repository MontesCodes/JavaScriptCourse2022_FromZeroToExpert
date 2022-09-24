'use strict';
// Function Expression
const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Arrow function
const calcTip2 = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// Array
const bills = [125, 555, 44];

const tips1 = [calcTip1(bills[0]), calcTip1(bills[1]), calcTip1(bills[2])];

const tips2 = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip2(bills[2])];

const totals1 = [bills[0] + tips1[0], bills[1] + tips1[1], bills[2] + tips1[2]];

const totals2 = [bills[0] + tips2[0], bills[1] + tips2[1], bills[2] + tips2[2]];

console.log(bills, tips1, totals1);
console.log(bills, tips2, totals2);

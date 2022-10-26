'use strict';

const calcAverage = (inputA, inputB, inputC) => (inputA + inputB + inputC) / 3;
console.log(calcAverage(3, 4, 5));

// Input values
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(56, 54, 49);
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(44, 23, 71);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`koalas win (${avgKoalas}) vs. ${avgDolphins}`);
  } else {
    console.log('No team wins...');
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

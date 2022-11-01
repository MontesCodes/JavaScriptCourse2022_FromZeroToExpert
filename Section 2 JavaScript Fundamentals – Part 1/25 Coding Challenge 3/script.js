'use strict';

// Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const scoreDolphins0 = (96 + 108 + 89) / 3;
const scoreKoalas0 = (88 + 91 + 110) / 3;
console.log(scoreDolphins0, scoreKoalas0);

if (scoreDolphins0 > scoreKoalas0) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas0 > scoreDolphins0) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins0 === scoreKoalas0) {
  console.log('Both win the trophy!');
}

const scoreDolphins1 = (97 + 112 + 101) / 3;
const scoreKoalas1 = (109 + 95 + 123) / 3;
console.log(scoreDolphins1, scoreKoalas1);

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= 100) {
  console.log('Koalas win the trophy');
} else {
  console.log('Neither team wins the trophy!');
}

const scoreDolphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 106) / 3;
console.log(scoreDolphins2, scoreKoalas2);

if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas2 > scoreDolphins2 && scoreKoalas2 >= 100) {
  console.log('Koalas win the trophy');
} else if (
  scoreDolphins2 === scoreKoalas2 &&
  scoreDolphins2 >= 100 &&
  scoreKoalas2 >= 100
) {
  console.log('Both win the trophy!');
} else {
  console.log('Neither team wins the trophy!');
}

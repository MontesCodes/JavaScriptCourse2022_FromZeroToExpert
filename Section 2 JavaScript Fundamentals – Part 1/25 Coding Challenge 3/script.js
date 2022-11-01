'use strict';

// Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
}

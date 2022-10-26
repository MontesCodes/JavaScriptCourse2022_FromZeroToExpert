'use strict';

const montesArray = [
  'Montes',
  'Kelly',
  2037 - 1984,
  ['Michael', 'Peter', 'Steven'],
  true,
  false,
];

for (let i = montesArray.length - 1; i >= 0; i--) {
  console.log(i, montesArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercie ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting Weight Repetition ${rep} `);
  }
}

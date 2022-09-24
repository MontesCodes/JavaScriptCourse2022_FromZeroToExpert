'use strict';

const montes = {
  firstName: 'Montes',
  lastName: 'Kelly',
  birthYear: 1984,
  age: 2037 - 1984,
  job: 'Training FrontEnd Dev',
  friends: ['Mike', 'Chad', 'Brandon'],
  hasDriversLicense: true,

  //   calcAge: function (birthYear){
  //        return 2037 - birthYear;
  //   }

  //   calcAge: function () {
  //     //     return 2037 - birthYear;
  //     console.log(this);
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    //     return 2037 - birthYear;
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      montes.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};

console.log(montes.calcAge());

console.log(montes.age);
console.log(montes.age);
console.log(montes.age);
console.log(montes.age);

console.log(montes.calcAge(1984));
console.log(montes['calcAge'](1984));

console.log(montes.getSummary());

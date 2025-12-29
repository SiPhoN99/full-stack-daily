console.log('file executed');

'use strict';
const name = "Johne Doe";
const username = 'Alex';
const age = 21;
const isActive = true;
const scores = [3, 7, 12, 25, 4];
const profile = { role: 'user', level: 1 };

function add(a,b){
    return a+b;
}
const greaterThanTen = (numbers) => {
    return numbers.filter(n => n>10);
};
const double = (numbers) => {
    return numbers.map(n => n*2);
};
//console.log(add(5,10));

//console.log(greaterThanTen(scores));

//console.log(double(scores));

const filtered = scores.filter(n => n > 10);
console.log(filtered);

const total = scores.reduce((sum, n) => {
  return sum + n;
}, 0);

console.log(total);
const user = {
  name: 'Alex',
  age: 21,
  isActive: true,
  describe() {
    return `My name is ${this.name}, I am ${this.age} years old, active: ${this.isActive}`;
  }
};
console.log(user.describe());

function checkPositive(number) {
  if (number < 0) {
    throw new Error('Number must be positive');
  }
  return 'Valid number';
}

try {
  console.log(checkPositive(10));
  console.log(checkPositive(-5));
} catch (err) {
  console.log('Error:', err.message);
}


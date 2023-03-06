const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const numbers = input[1].split('').map(Number);
let sum = 0;

numbers.forEach((num) => (sum += num));

console.log(sum);

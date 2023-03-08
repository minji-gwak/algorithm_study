const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const numbers = input[1].split('').map(Number);

console.log(numbers.reduce((sum, num) => (sum += num), 0));

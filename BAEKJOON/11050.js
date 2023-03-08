const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function factorial(num) {
  let result = 1;
  for (let i = 1; i < num + 1; i++) {
    result *= i;
  }
  return result;
}

const n_fac = factorial(input[0]);
const n_k_fac = factorial(input[0] - input[1]);
const k_fac = factorial(input[1]);

console.log(n_fac / (n_k_fac * k_fac));

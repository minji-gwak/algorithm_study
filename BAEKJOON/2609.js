const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let remain = 0;
let num1 = input[0];
let num2 = input[1];

// 최대공약수 구하기
while (num2 != 0) {
  remain = num1 % num2;
  num1 = num2;
  num2 = remain;
}

console.log(num1);

// 최소공배수 구하기
console.log((input[0] * input[1]) / num1);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(input) {
  const numList = input[1].split(' ').map(Number);
  let count = 0;

  numList.forEach((num) => (isPrime(num) ? count++ : count));
  console.log(count);
}

solution(input);

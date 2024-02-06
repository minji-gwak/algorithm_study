const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const count = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

// sort 내림차순 정렬 -> index 0번째 최소값, count - 1 최대값
numbers.sort((a, b) => a - b);

console.log(`${numbers[0]} ${numbers[count - 1]}`);

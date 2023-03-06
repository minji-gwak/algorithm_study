const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = input[0];
const scoreList = input[1].split(' ');

const maxScore = Math.max(...scoreList);
let sum = 0;

for (let i = 0; i < count; i++) {
  sum += (scoreList[i] / maxScore) * 100;
}

console.log(sum / count);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(input) {
  const answer = input.reduce((sum, num) => sum + num ** 2, 0) % 10;
  console.log(answer);
}

solution(input);

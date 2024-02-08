const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function solution(input) {
  input.shift();

  const numList = input.sort((a, b) => a - b);
  console.log(numList.join('\n'));
}

solution(input);

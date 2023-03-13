const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(input) {
  console.log(input[0] + input[1]);
  console.log(input[0] - input[1]);
  console.log(input[0] * input[1]);
  console.log(Math.floor(input[0] / input[1]));
  console.log(input[0] % input[1]);
}

solution(input);

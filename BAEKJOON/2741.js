const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(input) {
  let answer = '';
  for (let i = 1; i <= input; i++) {
    answer += i + '\n';
  }
  console.log(answer);
}

solution(input);

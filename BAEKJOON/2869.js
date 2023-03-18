const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution([up, down, top]) {
  const date = Math.ceil((top - up) / (up - down)) + 1;

  console.log(date);
}

solution(input);

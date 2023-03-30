const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(input) {
  const [x, y, w, h] = input;

  console.log(Math.min(x, y, w - x, h - y));
}

solution(input);

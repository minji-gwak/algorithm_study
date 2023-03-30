const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(input) {
  let star = '';
  for (let i = 0; i < input; i++) {
    star += '*';
    console.log(star);
  }
}

solution(input);

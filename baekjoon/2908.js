const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

function solution(input) {
  first_num = Number(input[0].split('').reverse().join(''));
  second_num = Number(input[1].split('').reverse().join(''));

  console.log(Math.max(first_num, second_num));
}

solution(input);

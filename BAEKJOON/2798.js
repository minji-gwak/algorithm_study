const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  input[0] = input[0].split(' ').map(Number);
  input[1] = input[1].split(' ').map(Number);
  const cardNum = input[0][0];
  const sumMax = input[0][1];
  let answer = 0;
  for (let i = 0; i < cardNum; i++) {
    for (let j = i + 1; j < cardNum; j++) {
      for (let k = j + 1; k < cardNum; k++) {
        let cardSum = input[1][i] + input[1][j] + input[1][k];
        if (sumMax >= cardSum && answer < cardSum) {
          answer = cardSum;
        }
      }
    }
  }
  console.log(answer);
}

solution(input);

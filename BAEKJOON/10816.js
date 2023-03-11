// 시간 초과 나온 답변
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const cardList = input[1].split(' ');
  const countList = input[3]
    .split(' ')
    .map((checkNum) => cardList.reduce((cnt, cardNum) => (cardNum === checkNum ? cnt + 1 : cnt), 0));

  console.log(countList.join(' '));
}

solution(input);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function solution(moneyNum) {
  const answerList = new Array();
  moneyNum.forEach((num) => {
    if (num !== 0) answerList.push(num);
    else answerList.pop();
  });
  console.log(answerList.reduce((sum, x) => sum + x, 0));
}

solution(input.splice(1));

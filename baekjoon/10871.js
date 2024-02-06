const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(checkNum, numList) {
  const answerList = Array();
  numList.forEach((num) => {
    if (checkNum > num) {
      answerList.push(num);
    }
  });
  console.log(answerList.join(' '));
}

solution(Number(L.split(' ')[1]), datas.split(' ').map(Number));

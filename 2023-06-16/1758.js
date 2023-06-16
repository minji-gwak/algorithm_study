const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (N, tipList) => {
  tipList.sort((a, b) => b - a);
  let sum = 0;

  tipList.forEach((tip, seq) => {
    let realTip = tip - seq;
    if (realTip > 0) {
      sum += realTip;
    }
  });

  console.log(sum);
};

solution(Number(L), datas.map(Number));

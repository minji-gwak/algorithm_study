const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (N, tipList) => {
  tipList.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    let tips = tipList[i] - i;
    if (tips > 0) {
      sum += tips;
    }
  }
  console.log(sum);
};

solution(Number(L), datas.map(Number));

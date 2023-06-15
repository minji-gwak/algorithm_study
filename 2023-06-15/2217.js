const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (N, ropeList) => {
  ropeList.sort((a, b) => a - b);
  let maxWeight = Number.MIN_SAFE_INTEGER;
  let ropeCnt = N;

  for (let i = 0; i < N; i++) {
    let minRope = ropeList[i];
    maxWeight = Math.max(maxWeight, minRope * ropeCnt);
    ropeCnt--;
  }

  console.log(maxWeight);
};

solution(Number(L), datas.map(Number));

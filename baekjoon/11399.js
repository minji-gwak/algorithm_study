const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (timeList) => {
  timeList.sort((a, b) => a - b);
  let totalTimeSum = 0;
  let timeSum = 0;

  timeList.forEach((time) => {
    timeSum += time;
    totalTimeSum += timeSum;
  });
  console.log(totalTimeSum);
};

solution(datas.split(' ').map(Number));

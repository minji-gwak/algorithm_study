const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

const solution = (change) => {
  let answer = 0;

  if (change === 1 || change === 3) {
    // 거스름돈이 1 또는 3 인 경우에만 거슬러 줄 수 없다.
    answer = -1;
  } else {
    let fiveNum = Math.floor(change / 5);
    if ((change - fiveNum * 5) % 2 !== 0 && fiveNum !== 0) {
      fiveNum--;
    }
    let twoNum = (change - fiveNum * 5) / 2;
    answer = fiveNum + twoNum;
  }

  console.log(answer);
};

solution(Number(input));

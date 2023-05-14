const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const S = Number(fs.readFileSync(filePath).toString().trim());

function solution(sum) {
  let start = 1;
  let end = sum === 1 ? 1 : sum - 1;
  let maxCnt = Number.MIN_SAFE_INTEGER;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let seqSum = (mid * (1 + mid)) / 2;
    if (seqSum > sum) {
      end = mid - 1;
    } else {
      maxCnt = mid;
      start = mid + 1;
    }
  }

  console.log(maxCnt);
}

solution(Number(S));

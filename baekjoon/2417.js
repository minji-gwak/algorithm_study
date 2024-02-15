const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());

const solution = (n) => {
  let [start, end] = [0, n];
  let maxSquareRoot = Number.MIN_SAFE_INTEGER;

  while (start <= end) {
    let mid = Math.round((start + end) / 2);
    let midSquare = mid ** 2;
    if (midSquare >= n) {
      maxSquareRoot = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log(maxSquareRoot);
};

solution(Number(N));

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = ([n, m], trees) => {
  let [low, high] = [0, Math.max(...trees)];
  let maxLen = Number.MIN_SAFE_INTEGER;

  while (low <= high) {
    let mid = ~~((low + high) / 2);
    let cutLen = trees.reduce((sum, tLen) => (mid < tLen ? sum + tLen - mid : sum), 0);

    if (m === cutLen) {
      maxLen = mid;
      break;
    } else if (m < cutLen) {
      maxLen = Math.max(mid, maxLen);
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(maxLen);
};

solution(L.split(' ').map(Number), datas.split(' ').map(Number));

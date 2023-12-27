const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = ([n, m], tteokList) => {
  tteokList.sort((a, b) => a - b);
  let maxHeight = 0;
  let [low, high] = [0, tteokList[n - 1]];

  while (low < high) {
    let mid = ~~((low + high) / 2);
    let cutLen = tteokList.reduce((sum, tLen) => (mid < tLen ? sum + tLen - mid : sum), 0);

    if (m === cutLen) {
      maxHeight = mid;
      break;
    } else if (m < cutLen) {
      low = mid + 1;
      maxHeight = Math.max(maxHeight, mid);
    } else {
      high = mid;
    }
  }
  console.log(maxHeight);
};

solution(L.split(' ').map(Number), datas.split(' ').map(Number));

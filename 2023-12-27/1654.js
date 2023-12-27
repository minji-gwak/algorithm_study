const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = ([k, n], lanList) => {
  let [low, high] = [1, Math.max(...lanList)];
  let maxLen = Number.MIN_SAFE_INTEGER;

  while (low <= high) {
    let mid = ~~((low + high) / 2);
    let cutCnt = lanList.reduce((sum, lan) => sum + ~~(lan / mid), 0);

    if (n <= cutCnt) {
      maxLen = Math.max(maxLen, mid);
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(high);
};

solution(L.split(' ').map(Number), datas.map(Number));

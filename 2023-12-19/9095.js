const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const dfs = (N, cnt = 0) => {
  for (let i = 1; i <= 3; i++) {
    cnt = N - i > 0 ? dfs(N - i, cnt) : N - i === 0 ? cnt + 1 : cnt;
  }
  return cnt;
};

const solution = (T, nList) => {
  nList.forEach((n) => {
    console.log(dfs(n));
  });
};

solution(L, datas);

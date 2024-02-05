const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = (n, opinions) => {
  const cutNum = Math.round(n * 0.15);
  opinions.sort((a, b) => a - b);
  console.log(Math.round(opinions.slice(cutNum, n - cutNum).reduce((sum, x) => sum + x, 0) / (n - cutNum * 2)) || 0);
};

solution(L, datas);

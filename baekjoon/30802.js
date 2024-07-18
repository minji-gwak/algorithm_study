const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (N, tshirts, [T, P]) => {
  const tshirtBundles = tshirts.reduce((sum, val) => sum + Math.ceil(val / T), 0);
  const penBundles = [Math.floor(N / P), N % P];
  console.log(tshirtBundles);
  console.log(...penBundles);
};

solution(
  Number(L),
  datas[0].split(' ').map((x) => Number(x)),
  datas[1].split(' ').map((x) => Number(x))
);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (A, B, C) => {
  console.log(Number(A) + Number(B) - Number(C));
  console.log(A + B - C);
};

solution(...datas);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution([str]) {
  const strArr = str.split('');
  const M = 1234567891;
  let r = 1;
  let hashSum = 0;

  strArr.forEach((char) => {
    let calculateHash = (char.charCodeAt() - 96) * r;
    r = (r * 31) % M;
    hashSum += calculateHash;
  });

  console.log(hashSum % M);
}

solution(input.splice(1));

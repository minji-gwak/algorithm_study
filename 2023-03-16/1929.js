const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function isPrime(num) {
  if (num === 1) return false;
  let primeChk = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    primeChk = true;
    if (num % i === 0) {
      primeChk = false;
      break;
    }
  }
  return primeChk;
}

function solution([n, m]) {
  const primeList = new Array();

  for (let i = n; i <= m; i++) {
    if (isPrime(i)) primeList.push(i);
  }
  console.log(primeList.join('\n'));
}

solution(input);

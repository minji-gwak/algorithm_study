const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(num) {
  let fiveQuotient = Math.floor(num / 5);
  let zeroCount = fiveQuotient;

  while (fiveQuotient >= 5) {
    fiveQuotient = Math.floor(fiveQuotient / 5);
    zeroCount += fiveQuotient;
  }

  console.log(zeroCount);
}

solution(input);

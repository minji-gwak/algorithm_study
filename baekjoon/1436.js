const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(movieCount) {
  let seriesNum = 666;
  let nameCount = 1;

  while (nameCount < movieCount) {
    seriesNum += 1;
    if (String(seriesNum).includes('666')) nameCount++;
  }
  console.log(seriesNum);
}

solution(input);

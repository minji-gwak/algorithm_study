const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution([humanNum, deleteNum]) {
  const humanArr = new Array(humanNum);
  const answer = new Array();
  let count = 0;

  for (let i = 0; i < humanNum; i++) {
    humanArr[i] = i + 1;
  }

  while (humanArr.length) {
    let firstHuman = humanArr.shift();
    count++;

    if (count % deleteNum === 0) {
      answer.push(firstHuman);
    } else {
      humanArr.push(firstHuman);
    }
  }

  console.log(`<${answer.join(', ')}>`);
}

solution(input);

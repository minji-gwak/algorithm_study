const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  for (let i = 0; i < datas.length; i++) {
    let command = datas[i];
    let sum = 0;
    for (let j = 0; j < command.length; j++) {
      if (command[j] === '(') {
        sum++;
      } else {
        sum--;
      }
      if (sum < 0) {
        console.log('NO');
        break;
      }
    }
    if (sum > 0) {
      console.log('NO');
    } else if (sum === 0) {
      console.log('YES');
    }
  }
}

solution(datas.slice(1));

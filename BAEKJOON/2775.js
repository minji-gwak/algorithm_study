const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const caseNum = parseInt(input.length / 2);
  const answerList = new Array();
  const residentsList = new Array(14).fill(new Array(14).fill(0));

  let calFibo = (k, n) => {
    if (k < 1) {
      for (let i = 1; i <= n; i++) {
        residentsList[k][i] = 1;
      }
    }

    if (!residentsList[k][n]) {
      residentsList[k][n] = calFibo(k, n - 1) + calFibo(k - 1, n);
    }

    return residentsList[k][n];
  };

  for (let i = 0; i < caseNum; i++) {
    let residentsNum = calFibo(input[i * 2], input[i * 2 + 1]);
    answerList.push(residentsNum);
  }

  console.log(answerList.join('\n'));
}

solution(input.splice(1));

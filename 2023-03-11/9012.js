const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(psList) {
  const answerList = new Array();

  psList.forEach((str) => {
    let openCnt = 0; // 괄호 열기 개수
    let closeCnt = 0; // 괄호 닫기 개수
    let answer = 'YES';

    // VPS 이려면 길이가 짝수여야 한다.
    if (str.length % 2 === 1) answer = 'NO';

    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      switch (char) {
        case '(':
          openCnt++;
          if (i === str.length - 1) {
            // 마지막 인덱스에 괄호가 열렸을 경우 NO
            answer = 'NO';
          }
          break;
        case ')':
          closeCnt++;
          if (i === 0 || openCnt < closeCnt) {
            // 첫번째 인덱스에 닫히는 괄호가 나오거나,
            // 열린 괄호 개수보다 닫힌 괄호의 개수가 많아졌을 때 NO
            answer = 'NO';
          }
          break;
      }

      if (answer === 'NO') break; // NO인 경우 탈출 !
    }

    if (answer === 'YES') {
      if (openCnt === closeCnt) {
        answer = 'YES';
      } else {
        // 마지막으로 열린 괄호 개수와 닫힌 괄호 개수가 같은지 체크
        answer = 'NO';
      }
    }

    answerList.push(answer);
  });

  console.log(answerList.join('\n'));
}

solution(input.splice(1));

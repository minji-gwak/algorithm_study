const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// OX 퀴즈 결과 개수
const caseCnt = Number(input.shift());

for (let i = 1; i < caseCnt + 1; i++) {
  let caseArr = input[i].split(''); // 문자열 to 배열
  let resultCnt = 0; // 각 결과의 점수

  caseArr.forEach((result, index) => {
    if (result === 'O') {
      resultCnt++;
      caseArr[index] = resultCnt; // O, X로 구성되어 있던 배열을 각각 점수로 치환
    } else {
      resultCnt = 0;
      caseArr[index] = resultCnt;
    }
  });

  let totalScore = caseArr.reduce((sum, score) => sum + score, 0); // 점수들의 총합
  console.log(totalScore);
}

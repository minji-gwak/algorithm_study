const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  input = input.map((item) => item.split(' ').map(Number));
  const caseNum = parseInt(input.length / 2); // 테스트케이스의 수
  const answer = new Array();

  for (let i = 0; i < caseNum; i++) {
    const priorityList = input[i * 2 + 1]; // 문서 리스트
    let docIndex = input[i * 2][1]; // 찾는 문서의 인덱스
    let count = 0; // 몇번째로 출력되는지 카운트

    while (true) {
      let firstPriority = priorityList.shift(); // 현재 첫번째 문서의 우선순위
      let maxPriority = Math.max(...priorityList);

      if (maxPriority > firstPriority) {
        // 첫번째 문서보다 우선순위가 높은게 하나라도 있는 경우
        priorityList.push(firstPriority); // 맨 뒤로 재배치
        docIndex = docIndex === 0 ? priorityList.length - 1 : docIndex - 1;
      } else {
        count++; // 첫번째 문서보다 우선순위가 높은게 없는 경우, 인쇄한다.
        if (docIndex === 0) {
          // 이때 찾는 문서가 맨 앞이었던 경우, 몇 번째로 인쇄됐는지 출력한다.
          answer.push(count);
          break;
        }
        // 다른 문서를 인쇄한 경우
        docIndex--;
      }
    }
  }

  console.log(answer.join('\n'));
}

solution(input.splice(1));

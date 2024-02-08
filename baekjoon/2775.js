const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function solution(input) {
  const answerList = new Array();
  const T = parseInt(input.length / 2); // 테스트케이스 수

  for (let i = 0; i < T; i++) {
    let floorNum = input.shift(); // 층수
    let roomNum = input.shift(); // 호수

    // (floorNum + 1(0층)) * roomNum 의 이차원 배열 생성
    const house = Array.from(Array(floorNum + 1), () => Array(roomNum).fill(0));

    // 0층의 j호에는 j명이 산다.
    for (let j = 0; j < roomNum; j++) {
      house[0][j] = j + 1;
    }

    for (let n = 1; n <= floorNum; n++) {
      for (let m = 0; m < roomNum; m++) {
        // n층의 1호에는 아래층에 사는 사람 만큼 산다.
        if (m === 0) {
          house[n][m] = house[n - 1][m];
          continue;
        }

        // house[n][m - 1] 이 (n - 1)층의 1호부터 (m - 2)호까지의 합이므로
        // house[n][m] = house[n][m - 1] + house[n - 1][m] ((n - 1)층의 (m - 1)호에 사는 사람의 수) 이다.
        house[n][m] = house[n][m - 1] + house[n - 1][m];
      }
    }
    answerList.push(house[floorNum][roomNum - 1]);
  }

  console.log(answerList.join('\n'));
}

solution(input.splice(1));

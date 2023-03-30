const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, lenData] = [input[0].split(' ').map(Number), input[1].split(' ').map(Number)];

function solution(bringLength, treesLengthList) {
  let [searchStart, searchEnd] = [0, Math.max(...treesLengthList)]; // 찾는 것이 자르는 길이이므로 범위는 (0 ~ 나무 길이의 최댓값)
  let maxCutLength = Number.MIN_SAFE_INTEGER;

  while (searchStart <= searchEnd) {
    let searchMiddle = Math.floor((searchStart + searchEnd) / 2);
    let cutSum = treesLengthList.reduce((sum, len) => (len > searchMiddle ? sum + len - searchMiddle : sum), 0);

    if (cutSum < bringLength) {
      searchEnd = searchMiddle - 1;
    } else {
      if (searchMiddle > maxCutLength) maxCutLength = searchMiddle;
      searchStart = searchMiddle + 1;
    }
  }
  console.log(maxCutLength);
}

solution(N[1], lenData);

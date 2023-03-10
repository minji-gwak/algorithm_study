const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [rows, columns] = [input[0].split(' ')[0], input[0].split(' ')[1]];
input.shift();
input.map((x) => x.split('')); // 이차원 배열로 만들기

let MIN_count = Number.MAX_SAFE_INTEGER; // 최소 카운트

// 시작 위치에 따라 색칠해야 하는 정사각형의 개수 구하기
function paintCount(startRow, startCol, firstColor) {
  let count = 0;
  for (let n = 0; n < 8; n++) {
    for (let m = 0; m < 8; m++) {
      let nowColor = input[n + startRow][m + startCol];

      if (firstColor === nowColor && (n + m) % 2 === 1) {
        count++;
      } else if (firstColor !== nowColor && (n + m) % 2 === 0) {
        count++;
      }
    }
  }
  return count;
}

// 시작 위치 고정
for (let i = 0; i + 7 < rows; i++) {
  for (let j = 0; j + 7 < columns; j++) {
    let firstColor = input[i][j];
    let color_keep_count = paintCount(i, j, firstColor); // 시작 color 유지한 경우
    let color_change_count = paintCount(i, j, firstColor === 'B' ? 'W' : 'B'); // 시작 color 변경한 경우

    MIN_count = Math.min(MIN_count, color_keep_count, color_change_count);
  }
}

console.log(MIN_count);

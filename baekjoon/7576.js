const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution([row, col], graphData) {
  const directionX = [1, 0, -1, 0];
  const directionY = [0, 1, 0, -1];
  const queue = [];
  const dist = [...Array(col)].map(() => Array(row).fill(0));

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (graphData[i][j] === 1) {
        queue.push([i, j]);
      } else if (graphData[i][j] === 0) {
        dist[i][j] = -1;
      }
    }
  }

  let head = 0;
  while (queue.length > head) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = x + directionX[i];
      const ny = y + directionY[i];

      if (nx < 0 || ny < 0 || nx >= col || ny >= row || dist[nx][ny] >= 0) {
        continue;
      }

      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  let day = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (dist[i][j] === -1) {
        return -1;
      } else {
        day = Math.max(day, dist[i][j]);
      }
    }
  }
  return day;
}

console.log(
  solution(
    L.split(' ').map(Number),
    datas.map((x) => x.split(' ').map(Number))
  )
);

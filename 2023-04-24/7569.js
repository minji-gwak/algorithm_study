const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution([row, col, boxCnt], graphData) {
  const directions = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];

  const queue = [];
  const visited = [...Array(boxCnt)].map((x) => [...Array(col)].map((n) => Array(row).fill(0)));
  let count = row * col * boxCnt;
  let z = 0;
  let days = 0;

  for (let i = 0; i < graphData.length; i++) {
    let box = graphData[i].split(' ').map(Number);

    box.forEach((tomato, pos) => {
      if (tomato === 1) {
        queue.push([i % col, pos, z, 0]);
        visited[z][i % col][pos] = 1;
        count--;
      } else if (tomato === -1) {
        visited[z][i % col][pos] = 1;
        count--;
      }
    });

    if ((i + 1) % col === 0) {
      ++z;
    }
  }

  let index = 0;
  while (queue.length != index) {
    const [x, y, z, pos] = queue[index];
    for (let i = 0; i < directions.length; i++) {
      const xPos = x + directions[i][0];
      const yPos = y + directions[i][1];
      const zPos = z + directions[i][2];

      if (xPos < 0 || yPos < 0 || zPos < 0 || xPos >= col || yPos >= row || zPos >= boxCnt) {
        continue;
      } else if (!visited[zPos][xPos][yPos]) {
        visited[zPos][xPos][yPos] = 1;
        queue.push([xPos, yPos, zPos, pos + 1]);
        count--;
      }
    }

    index++;
    days = pos;
  }

  console.log(count ? -1 : days);
}

solution(L.split(' ').map(Number), datas);

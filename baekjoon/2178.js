const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution([yMin, xMin], map) {
  const queue = [[0, 0, 1]];

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length) {
    const [x, y, distance] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const xPos = x + directions[i][0];
      const yPos = y + directions[i][1];

      if (0 <= xPos && yPos > -1 && xPos < xMin && yPos < yMin && map[yPos][xPos] === 1) {
        map[yPos][xPos] = distance + 1;
        queue.push([xPos, yPos, distance + 1]);
      }
    }
  }

  console.log(map[yMin - 1][xMin - 1]);
}

solution(
  L.split(' '),
  datas.map((x) => x.split('').map((v) => +v))
);

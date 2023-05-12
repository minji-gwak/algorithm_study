const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(mapSize, map) {
  const visited = Array.from(Array(mapSize), () => Array(mapSize).fill(false));

  const direntionX = [0, 0, -1, 1];
  const directionY = [-1, 1, 0, 0];

  let [houseCnt, complexCnt] = [0, 0];
  const answer = [];

  const dfs = (x, y) => {
    if (map[x][y] === 1 && visited[x][y] === false) {
      visited[x][y] = true;
      houseCnt++;

      for (let i = 0; i < 4; i++) {
        const [newX, newY] = [x + direntionX[i], y + directionY[i]];
        if (newX >= 0 && newX < mapSize && newY >= 0 && newY < mapSize) {
          dfs(newX, newY);
        }
      }
    }
  };

  for (let i = 0; i < mapSize; i++) {
    for (let j = 0; j < mapSize; j++) {
      if (map[i][j] === 1 && visited[i][j] === false) {
        dfs(i, j);
        complexCnt++;
        answer.push(houseCnt);
        houseCnt = 0;
      }
    }
  }

  console.log([complexCnt, ...answer.sort((a, b) => a - b)].join('\n'));
}

solution(
  Number(L),
  datas.map((x) => x.split('').map(Number))
);

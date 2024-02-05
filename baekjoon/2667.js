const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (N, graph) => {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const blockCnt = [];
  let houseCnt = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= N || y < 0 || y >= N) {
      return false;
    }
    if (graph[x][y] == '1') {
      houseCnt++;
      graph[x][y] = 0;

      for (let n = 0; n < 4; n++) {
        nx = x + dx[n];
        ny = y + dy[n];
        dfs(nx, ny);
      }
      return true;
    }
    return false;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (dfs(i, j)) {
        blockCnt.push(houseCnt);
        houseCnt = 0;
      }
    }
  }
  console.log([blockCnt.length, ...blockCnt.sort((a, b) => a - b)].join('\n'));
};

solution(
  Number(L),
  datas.map((x) => x.split(''))
);

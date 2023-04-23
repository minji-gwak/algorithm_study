const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, N, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(nodeNum, edgeNum, pairList) {
  const computerGraph = [...Array(nodeNum + 1)].map(() => []);
  const visited = [...Array(nodeNum + 1)].fill(0);
  let answer = 0;

  for (let i = 0; i < edgeNum; i++) {
    let start = Number(pairList[i][0]);
    let end = Number(pairList[i][1]);
    computerGraph[start].push(end);
    computerGraph[end].push(start);
  }

  visited[1] = 1;
  const dfs = (start) => {
    for (let end of computerGraph[start]) {
      if (!visited[end]) {
        visited[end] = 1;
        answer++;
        dfs(end);
      }
    }
  };
  dfs(1);

  console.log(answer);
}

solution(
  Number(L),
  Number(N),
  datas.map((x) => x.split(' ').map(Number))
);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, N, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(nodeNum, edgeNum, pairList) {
  const graph = [...Array(nodeNum + 1)].map(() => []);
  const visited = Array(nodeNum + 1).fill(false);
  let answer = 0;

  for (let i = 0; i < edgeNum; i++) {
    let [from, to] = pairList[i].map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  visited[1] = true;
  const dfs = (current) => {
    for (let next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;
        answer++;
        dfs(next);
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

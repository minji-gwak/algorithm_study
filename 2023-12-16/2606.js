const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, N, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(nodeNum, edgeNum, pairList) {
  const graph = [...Array(nodeNum + 1)].map(() => []);
  const visited = Array(nodeNum + 1).fill(false);
  visited[1] = true;

  for (let i = 0; i < edgeNum; i++) {
    let [from, to] = pairList[i].map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  const dfs = (current, cnt) => {
    for (let next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;
        cnt = dfs(next, cnt + 1);
      }
    }
    return cnt;
  };

  console.log(dfs(1, 0));
}

solution(
  Number(L),
  Number(N),
  datas.map((x) => x.split(' ').map(Number))
);

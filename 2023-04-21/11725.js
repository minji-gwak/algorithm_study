const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(nodeCount, pairList) {
  const graph = [...Array(nodeCount + 1)].map(() => []);
  const visited = Array(nodeCount + 1).fill(false);
  const parent = [];

  pairList.forEach((pairInfo) => {
    let [from, to] = pairInfo.split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
  });

  const bfs = (start) => {
    const queue = [start];
    visited[start] = true;

    while (queue.length !== 0) {
      const curr = queue.shift();
      for (let next of graph[curr]) {
        if (!visited[next]) {
          parent[next] = curr;
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  };
  bfs(1);

  console.log(parent.splice(2).join('\n'));
}

solution(Number(L), datas);

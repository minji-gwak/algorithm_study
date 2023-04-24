const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution([nodeCount, edgeCount, nodeNum], pairList) {
  const graph = [...Array(nodeCount + 1)].map(() => []);
  const visited = Array(nodeCount + 1).fill(false);
  const dfsAnswer = [];
  const bfsAnswer = [];

  pairList.forEach((pairInfo) => {
    let [from, to] = pairInfo.split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
  });

  graph.map((x) => x.sort((a, b) => a - b));

  const dfs = (currentNode) => {
    if (visited[currentNode]) {
      return;
    }
    visited[currentNode] = true;
    dfsAnswer.push(currentNode);
    for (let nextNode of graph[currentNode]) {
      if (!visited[nextNode]) {
        dfs(nextNode);
      }
    }
  };
  dfs(nodeNum);

  const bfs = (currentNode) => {
    const queue = [currentNode];
    visited[currentNode] = true;
    bfsAnswer.push(currentNode);

    while (queue.length !== 0) {
      let curr = queue.shift();

      graph[curr].forEach((next) => {
        if (next && !visited[next]) {
          visited[next] = true;
          bfsAnswer.push(next);
          queue.push(next);
        }
      });
    }
  };

  visited.fill(false);
  bfs(nodeNum);

  console.log([dfsAnswer.join(' '), bfsAnswer.join(' ')].join('\n'));
}

solution(L.split(' ').map(Number), datas);

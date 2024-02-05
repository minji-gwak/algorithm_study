const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (N, M, V, list) => {
  const graph = Array.from({ length: N + 1 }, () => []);
  list.forEach((pair) => {
    graph[pair[0]].push(pair[1]);
    graph[pair[1]].push(pair[0]);
  });

  // DFS
  const dfs = (start, visited = []) => {
    visited.push(start);
    graph[start]
      .sort((a, b) => a - b)
      .forEach((next) => {
        if (!visited.includes(next)) {
          dfs(next, visited);
        }
      });
    return visited;
  };

  // BFS
  const bfs = (start) => {
    const visited = [start];
    const q = [start];

    while (!!q.length) {
      let node = q.shift();
      graph[node]
        .sort((a, b) => a - b)
        .forEach((next) => {
          if (!visited.includes(next)) {
            visited.push(next);
            q.push(next);
          }
        });
    }
    return visited;
  };
  console.log([dfs(V).join(' '), bfs(V).join(' ')].join('\n'));
};

solution(
  ...L.split(' ').map(Number),
  datas.map((x) => x.split(' ').map(Number))
);

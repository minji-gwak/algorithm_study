const canFinish = (numCourses, prerequisites) => {
  const graph = {};
  const traced = new Set();
  const visited = new Set();
  prerequisites.forEach(([first, finish]) => {
    if (!graph[first]) {
      graph[first] = [];
    }
    graph[first].push(finish);
  });

  const dfs = (first) => {
    // 순환 구조이면 false
    if (traced.has(first)) {
      return false;
    } // 이미 방문했던 노드이면 true
    if (visited.has(first)) {
      return true;
    }

    traced.add(first);
    visited.add(first);
    if (first in graph && !!graph[first].length) {
      for (let i = 0; i < graph[first].length; i++) {
        if (!dfs(graph[first][i])) {
          return false;
        }
      }
    }
    // 탐색 종료 후 순환 노드 삭제
    traced.delete(first);
    return true;
  };
  // 순환 구조 판별
  const keyList = Object.keys(graph);
  for (let i = 0; i < keyList.length; i++) {
    if (!dfs(keyList[i])) {
      return false;
    }
  }
  return true;
};

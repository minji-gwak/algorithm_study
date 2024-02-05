const combine = (n, k) => {
  const answer = [];

  const dfs = (start, curr = [], leftCnt = k) => {
    if (!leftCnt) {
      answer.push(curr.slice());
      return;
    }
    for (let i = start; i <= n; i++) {
      curr.push(i);
      dfs(i + 1, curr, leftCnt - 1);
      curr.pop();
    }
  };
  dfs(1);
  return answer;
};

const permute = (nums) => {
  const answer = [];
  const visited = new Set();

  const dfs = (idx, curr = []) => {
    if (curr.length == nums.length) {
      answer.push(curr.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited.has(i)) {
        visited.add(i);
        curr.push(nums[i]);
        dfs(i, curr);
        curr.pop();
        visited.delete(i);
      }
    }
  };
  dfs(0);
  return answer;
};

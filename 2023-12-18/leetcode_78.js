const subsets = (nums) => {
  const answer = [];

  const dfs = (start = 0, subset = []) => {
    answer.push(subset);

    for (let idx = start; idx < nums.length; idx++) {
      dfs(idx + 1, subset.concat([nums[idx]]));
    }
  };
  dfs();
  return answer;
};

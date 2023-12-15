const topKFrequent = (nums, k) => {
  const numMap = new Map();
  const answer = [];

  nums.forEach((n) => {
    numMap.set(n, numMap.has(n) ? numMap.get(n) + 1 : 0);
  });
  const sortedArr = Array.from(numMap).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    answer.push(sortedArr[i][0]);
  }
  return answer;
};

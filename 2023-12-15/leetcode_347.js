const topKFrequent = (nums, k) => {
  const numMap = new Map();
  const answer = [];

  nums.forEach((n) => {
    if (numMap.has(n)) {
      numMap.set(n, numMap.get(n) + 1);
    } else {
      numMap.set(n, 0);
    }
  });
  const sortedArr = Array.from(numMap).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    answer.push(sortedArr[i][0]);
  }
  return answer;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

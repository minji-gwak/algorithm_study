const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, datas, M] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (n, budgets, limit) => {
  let [low, high] = [Math.min(...budgets), Math.max(...budgets)];
  let maxBudget = Number.MIN_SAFE_INTEGER;

  if (limit <= low * n) {
    maxBudget = Math.floor(limit / n);
  } else {
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let budSum = budgets.reduce((sum, bud) => (mid < bud ? sum + mid : sum + bud), 0);

      if (budSum <= limit) {
        maxBudget = Math.max(maxBudget, mid);
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  console.log(maxBudget);
};

solution(Number(N), datas.split(' ').map(Number), Number(M));

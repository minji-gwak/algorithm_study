const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, list, total] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (localCnt, budgetList, totalBudget) => {
  budgetList.sort((a, b) => a - b);
  let [start, end] = [budgetList[0], budgetList[localCnt - 1]];
  let budgetLimit = Number.MIN_SAFE_INTEGER;

  if (start * localCnt > totalBudget) {
    budgetLimit = Math.floor(totalBudget / localCnt);
  } else {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let budgetSum = 0;

      for (budget of budgetList) {
        if (mid < budget) {
          budgetSum += mid;
        } else {
          budgetSum += budget;
        }
      }

      if (budgetSum > totalBudget) {
        end = mid - 1;
      } else {
        start = mid + 1;
        budgetLimit = mid;
      }
    }
  }

  console.log(budgetLimit);
};

solution(Number(N), list.split(' ').map(Number), Number(total));

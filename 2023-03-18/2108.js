const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function calMode(nums) {
  const numsMap = new Map();
  nums.forEach((num) => {
    numsMap.set(num, (numsMap.get(num) || 0) + 1);
  });
  const maxCount = Math.max(...[...numsMap].map((x) => x[1]));
  const modeList = [...numsMap].filter((x) => x[1] === maxCount);

  if (modeList.length === 1) return modeList[0][0];
  else if (modeList.length > 1) return modeList[1][0];
}

function solution(nums) {
  nums.sort((a, b) => a - b);
  const numsLen = nums.length;
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  const mean = Math.round(totalSum / numsLen); // 산술평균
  const median = nums[Math.floor(numsLen / 2)]; // 중앙값
  const mode = calMode(nums); // 최빈값
  const range = nums[numsLen - 1] - nums[0]; // 범위
  console.log([mean, median, mode, range].join('\n'));
}

solution(input.splice(1));

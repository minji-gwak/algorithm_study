const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, parts, M, finds] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (n, partList, m, findList) => {
  partList.sort((a, b) => a - b);
  const answer = [];

  findList.forEach((find) => {
    let isExist = false;
    let [low, high] = [0, n];

    while (low < high) {
      let mid = ~~((low + high) / 2);
      if (partList[mid] == find) {
        isExist = true;
        break;
      } else if (partList[mid] < find) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    answer.push(isExist ? 'yes' : 'no');
  });
  console.log(answer.join(' '));
};

solution(Number(N), parts.split(' ').map(Number), Number(M), finds.split(' ').map(Number));

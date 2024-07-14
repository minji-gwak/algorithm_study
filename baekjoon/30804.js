const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (n, fruits) => {
  let [left, right] = [0, 1];
  let answer = 0;
  let nextLeft = 0;

  const kinds = new Set();
  kinds.add(fruits[0]);

  while (right < n) {
    if (kinds.length === 1) {
      if (!kinds.has(fruits[right])) {
        kinds.add(fruits[right]);
      }
    } else {
      if (!kinds.has(fruits[right])) {
        answer = Math.max(answer, right - left);

        kinds.clear();
        kinds.add(fruits[nextLeft]);

        kinds.add(fruits[right]);
        left = nextLeft;
      }
    }

    if (fruits[right - 1] !== fruits[right]) {
      nextLeft = right;
    }
    right++;
  }
  answer = Math.max(answer, n - left);
  console.log(answer);
};

solution(
  L,
  datas.split(' ').map((x) => Number(x))
);

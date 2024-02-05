const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [...datas] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));

const solution = (list) => {
  for (let i = 0; i < list.length; i++) {
    let [n, m, k] = list[i];
    if (!n && !m && !k) {
      return;
    }

    const caller = Array.from({ length: n }, (_, i) => i + 1);
    let cnt = 1;

    for (let j = 1; j <= k; j++) {
      while (cnt !== m) {
        cnt++;
        caller.push(caller.shift());
      }
      if (j === k) {
        console.log(caller[0]);
        break;
      }
      cnt = 1;
      caller.shift();
    }
  }
};

solution(datas);

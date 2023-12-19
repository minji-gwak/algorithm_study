const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (N, list) => {
  const dirtyStack = Array.from({ length: N }, (_, i) => N - i);
  const washStack = [];
  const dryStack = [];

  for (let i = 0; i < list.length; i++) {
    let [cmd, num] = list[i];
    for (let n = 0; n < num; n++) {
      if (cmd === 1) {
        washStack.push(dirtyStack.pop());
      } else {
        dryStack.push(washStack.pop());
      }
    }
  }
  console.log(dryStack.reverse().join('\n'));
};

solution(
  Number(L),
  datas.map((x) => x.split(' ').map(Number))
);

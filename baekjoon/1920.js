const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (list) => {
  const checkSet = new Set(list[1].split(' '));
  let answer = list[3].split(' ').map((x) => (checkSet.has(x) ? 1 : 0));

  console.log(answer.join('\n'));
};

solution(datas);

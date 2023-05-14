const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, nList, M, mList] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (cardList, checkList) => {
  const haveCardSet = new Set(cardList);
  const answer = Array();

  for (checkNum of checkList) {
    answer.push(haveCardSet.has(checkNum) ? 1 : 0);
  }
  console.log(answer.join(' '));
};

solution(nList.split(' ').map(Number), mList.split(' ').map(Number));

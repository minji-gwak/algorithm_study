const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, nList, M, mList] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (haveCnt, cardList, checkList) => {
  cardList.sort((a, b) => a - b);
  const answer = Array();

  for (checkNum of checkList) {
    let [start, end] = [0, haveCnt - 1];
    let isHave = false;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (cardList[mid] > checkNum) {
        end = mid - 1;
      } else if (cardList[mid] < checkNum) {
        start = mid + 1;
      } else {
        isHave = true;
        break;
      }
    }
    answer.push(isHave ? 1 : 0);
  }
  console.log(answer.join(' '));
};

solution(Number(N), nList.split(' ').map(Number), mList.split(' ').map(Number));

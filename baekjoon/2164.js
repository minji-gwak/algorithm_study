const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

const solution = (cNum) => {
  let cardList = Array(cNum)
    .fill()
    .map((_, index) => index + 1);

  while (cardList.length > 1) {
    if (!(cardList.length % 2)) {
      cardList = cardList.filter((_, index) => !((index + 1) % 2));
    } else {
      cardList = cardList.filter((_, index) => !((index + 1) % 2));
      cardList = [...cardList.slice(1), cardList[0]];
    }
  }

  console.log(cardList[0]);
};

solution(input);

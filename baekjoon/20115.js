const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (N, drinkAmountList) => {
  drinkAmountList.sort((a, b) => b - a);
  let bigDrinkAmount = drinkAmountList[0];

  for (let i = 1; i < N; i++) {
    bigDrinkAmount += drinkAmountList[i] / 2;
  }
  console.log(bigDrinkAmount);
};

solution(Number(L), datas.split(' ').map(Number));

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [N, ...priceList] = input;

  const solution = (N, priceList) => {
    priceList.sort((a, b) => b - a);
    let cantDiscountCnt = N % 3;
    let totalCost = 0;

    if (cantDiscountCnt !== 0) {
      for (let i = 0; i < cantDiscountCnt; i++) {
        totalCost += priceList[N - i - 1];
      }
    }

    for (let i = 0; i < N - cantDiscountCnt; i += 3) {
      totalCost += priceList[i] + priceList[i + 1];
    }

    console.log(totalCost);
  };
  solution(N, priceList.map(Number));
  process.exit();
});

// solution(Number(L), datas.map(Number));

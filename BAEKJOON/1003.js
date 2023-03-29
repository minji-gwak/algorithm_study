const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(testCount, numList) {
  const saveFiboResult = Array();
  const answerList = Array(testCount).fill(Array(2).fill(0));

  numList.forEach((fiboNum, index) => {
    let [zeroCount, oneCount] = [0, 0];

    for (let n = 0; n <= fiboNum; n++) {
      if (saveFiboResult.length > n) {
        continue;
      } else if (n === 0) {
        zeroCount++;
      } else if (n === 1) {
        zeroCount = 0;
        oneCount++;
      } else {
        [zeroCount, oneCount] = [
          saveFiboResult[n - 1][0] + saveFiboResult[n - 2][0],
          saveFiboResult[n - 1][1] + saveFiboResult[n - 2][1],
        ];
      }
      saveFiboResult.push([zeroCount, oneCount]);
    }

    answerList[index] = saveFiboResult[fiboNum];
  });

  console.log(answerList.map((x) => x.join(' ')).join('\n'));
}

solution(Number(L), datas.map(Number));

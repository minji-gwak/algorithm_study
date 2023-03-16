const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(inputNum) {
  const inputDigits = String(inputNum).length; // inputNum의 자릿수
  const resultArr = new Array(); // 생성자를 담을 배열

  for (let i = inputNum - 9 * inputDigits; i < inputNum; i++) {
    // i가 생성자 일 때 분해합 numSum
    let numSum =
      i +
      String(i)
        .split('')
        .map(Number)
        .reduce((sum, num) => sum + num, 0);

    // i가 inputNum의 생성자인 경우
    if (inputNum === numSum) resultArr.push(i);
  }

  // 생성자가 존재할 때 최소값을 출력하고, 없는 경우 0을 출력
  console.log(resultArr.length !== 0 ? Math.min(...resultArr) : 0);
}

solution(input);

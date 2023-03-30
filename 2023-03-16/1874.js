const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function solution(seqStack) {
  const stackLen = seqStack.length;
  const numStack = new Array(stackLen).fill(0).map((x, i) => (x = i + 1));
  const compareStack = new Array();
  let popCnt = 0;
  let answerList = new Array();

  for (let i = 0; i < stackLen; i++) {
    compareStack.push(numStack[i]);
    answerList.push('+');

    while (popCnt < stackLen) {
      if (seqStack[popCnt] !== compareStack[compareStack.length - 1]) break;
      popCnt++;
      compareStack.pop();
      answerList.push('-');
    }
  }

  if (numStack.length === 0) numStack;
  console.log(compareStack.length === 0 ? answerList.join('\n') : 'NO');
}

solution(input.splice(1));

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(strList) {
  const [smallOpen, smallClose, bigOpen, bigClose] = ['(', ')', '[', ']'];

  strList.forEach((str) => {
    const bracketList = new Array();
    let prevBracket = null;
    let isBalance = true;

    for (char of str) {
      if (!isBalance) break; // 균형잡힌 문자열이 아니라면 break;

      switch (char) {
        case smallOpen:
          bracketList.push(smallOpen);
          break;
        case bigOpen:
          bracketList.push(bigOpen);
          break;
        case smallClose:
          prevBracket = bracketList.pop();
          if (!!prevBracket === false) isBalance = false; // 열려있는 괄호가 없을 때 ❌
          else if (prevBracket === bigOpen) isBalance = false; // 직전의 큰 괄호가 닫히기 전에 작은 괄호 닫기  ❌
          break;
        case bigClose:
          prevBracket = bracketList.pop();
          if (!!prevBracket === false) isBalance = false;
          else if (prevBracket === smallOpen) isBalance = false;
          break;
        default:
          break;
      }
    }
    if (bracketList.length !== 0) isBalance = false; // 열려있는 괄호가 남아있으면  ❌
    console.log(isBalance ? 'yes' : 'no');
  });
}

solution(input.splice(0, input.length - 1));

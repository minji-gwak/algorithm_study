const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input.shift());

for (let i = 0; i < count; i++) {
  let resultStr = '';
  let [repeatCnt, str] = input[i].split(' ');

  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < repeatCnt; k++) {
      resultStr += str[j];
    }
  }

  console.log(resultStr);
}

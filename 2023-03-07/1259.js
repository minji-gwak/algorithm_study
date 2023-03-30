const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.splice(-1); // 테스트케이스 제거

input.forEach((numStr) => {
  let reverseNum = numStr.split('').reverse().join('');
  if (numStr === reverseNum) {
    console.log('yes');
  } else {
    console.log('no');
  }
});

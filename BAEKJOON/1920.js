const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sourceSet = new Set(input[1].split(' '));
const checkArr = input[3].split(' ');
let answer = '';

checkArr.forEach((num) => {
  if (sourceSet.has(num)) {
    answer += '1' + '\n';
  } else {
    answer += '0' + '\n';
  }
});

console.log(answer);

// 답은 맞지만 시간초과로 실패한 답변
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const sourceArr = input[1].split(' ');
// const checkArr = input[3].split(' ');

// checkArr.forEach((num) => {
//   if (sourceArr.indexOf(num) < 0) {
//     console.log('0');
//   } else {
//     console.log('1');
//   }
// });

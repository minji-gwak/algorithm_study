const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let compareInput = input.slice();

// 오름차순 정렬했을 때 같으면 ascending 출력, 내림차순 정렬했을 때 같으면 descending 출력
if (compareInput.sort((a, b) => a - b).join(' ') === input.join(' ')) {
  console.log('ascending');
} else if (compareInput.sort((a, b) => b - a).join(' ') === input.join(' ')) {
  console.log('descending');
} else {
  console.log('mixed');
}

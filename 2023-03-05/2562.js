const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let max = 0;
let maxIndex = 0;

input.forEach((num, index) => {
  if (num > max) {
    max = num;
    maxIndex = index;
  }
});

console.log(max);
console.log(maxIndex + 1);

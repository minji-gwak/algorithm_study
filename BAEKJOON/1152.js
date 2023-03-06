const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let countWords = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '') {
    countWords++;
  }
}

console.log(countWords);

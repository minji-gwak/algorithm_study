const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function solution(input) {
  const remainderList = new Set();

  input.forEach((num) => {
    remainderList.add(num % 42);
  });
  console.log(remainderList.size);
}

solution(input);

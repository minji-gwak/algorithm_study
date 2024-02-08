const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(roomNumber) {
  let count = 0;
  let roomCount = 1;

  while (roomCount < roomNumber) {
    count++;
    roomCount += count * 6;
  }
  console.log(count + 1);
}

solution(input);

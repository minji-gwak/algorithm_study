const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('');

function solution(input) {
  const alphabetList = new Array(26).fill(-1);

  input.forEach((char, index) => {
    if (alphabetList[char.charCodeAt() - 97] === -1) {
      alphabetList[char.charCodeAt() - 97] = index;
    }
  });
  console.log(alphabetList.join(' '));
}

solution(input);

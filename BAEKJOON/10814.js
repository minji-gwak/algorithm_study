const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  input.shift();

  input.sort((a, b) => {
    let a_info = a.split(' ');
    let b_info = b.split(' ');

    if (Number(a_info[0]) === Number(b_info[0])) {
      return a_info[1] < b_info[1] ? 0 : 1;
    }

    return Number(a_info[0]) - Number(b_info[0]);
  });

  console.log(input.join('\n'));
}

solution(input);

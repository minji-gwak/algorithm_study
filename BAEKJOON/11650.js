const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(dots) {
  dots.sort((aDot, bDot) => {
    [a_x, a_y] = aDot.split(' ');
    [b_x, b_y] = bDot.split(' ');

    return a_x === b_x ? a_y - b_y : a_x - b_x;
  });

  console.log(dots.join('\n'));
}

solution(input.splice(1));

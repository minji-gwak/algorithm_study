const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = (board) => {
  let polyomino = board;
  while (polyomino.includes('XXXX')) {
    polyomino = polyomino.replace('XXXX', 'AAAA');
  }
  while (polyomino.includes('XX')) {
    polyomino = polyomino.replace('XX', 'BB');
  }

  let answer = polyomino.includes('X') ? -1 : polyomino;

  console.log(answer);
};

solution(input);

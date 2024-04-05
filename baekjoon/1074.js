const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const recuriveZ = (N, row, col) => {
  if (N === 0) {
    return 0;
  }

  let halfSize = Math.pow(2, N - 1);

  if (row < halfSize && col < halfSize) {
    return recuriveZ(N - 1, row, col);
  } else if (row < halfSize && col >= halfSize) {
    return halfSize * halfSize + recuriveZ(N - 1, row, col - halfSize);
  } else if (row >= halfSize && col < halfSize) {
    return 2 * halfSize * halfSize + recuriveZ(N - 1, row - halfSize, col);
  } else if (row >= halfSize && col >= halfSize) {
    return 3 * halfSize * halfSize + recuriveZ(N - 1, row - halfSize, col - halfSize);
  }
};

const solution = (N, r, c) => {
  console.log(recuriveZ(N, r, c));
};

solution(...input);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const coordinates = input.map((x) => x.split(' ')).map(([x, y]) => ({ x: Number(x), y: Number(y) }));
  const sortCoordinates = coordinates
    .sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y))
    .map((dot) => `${dot.x} ${dot.y}`)
    .join('\n');

  console.log(sortCoordinates);
}

solution(input.splice(1));

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const humanInfo = input.map(([weight, height]) => ({ weight: Number(weight), height: Number(height) }));
  const bigCount = new Array(humanInfo.length).fill(1);

  humanInfo.forEach((a_info, index) => {
    humanInfo.forEach((b_info) => {
      if (a_info.weight < b_info.weight && a_info.height < b_info.height) bigCount[index]++;
    });
  });
  console.log(bigCount.join('\n'));
}

solution(input.splice(1).map((info) => info.split(' ')));

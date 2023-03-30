const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(timeList) {
  const totalSum = timeList
    .sort((a, b) => b - a) // 시간 내림차순 정렬
    .map((time, index) => time * (index + 1)) // 인출까지 걸리는 시간
    .reduce((sum, takenTime) => sum + takenTime, 0); // 인출까지 걸리는 시간들의 총합

  console.log(totalSum);
}

solution(datas.split(' ').map(Number));

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const [L, datas] = fs.readFileSync(filePath).toString().trim().split('\n');

// function solution(timeList) {
//   timeList.sort((a, b) => a - b); // 오름차순 정렬
//   let currentTimeSum = 0; // n번째 사람이 걸리는 시간
//   let totalSum = 0; // 모든 사람들이 돈을 인출하는데 걸리는 시간의 총합

//   timeList.forEach((currenTime) => {
//     currentTimeSum += currenTime;
//     totalSum += currentTimeSum;
//   });

//   console.log(totalSum);
// }

// solution(datas.split(' ').map(Number));

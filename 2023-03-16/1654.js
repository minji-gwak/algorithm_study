const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(needCount, lanLengthList) {
  let [searchStart, searchEnd] = [0, Math.max(...lanLengthList)];
  let maxLanLength = Number.MIN_SAFE_INTEGER;

  while (searchStart <= searchEnd) {
    let middle = Math.floor((searchStart + searchEnd) / 2);
    let makeLanCount = lanLengthList.reduce((count, len) => count + Math.floor(len / middle), 0);

    if (makeLanCount < needCount) {
      searchEnd = middle - 1;
    } else {
      if (maxLanLength < middle) maxLanLength = middle;
      searchStart = middle + 1;
    }
  }
  console.log(maxLanLength);
}

solution(
  N.split(' ').map(Number)[1],
  datas.map(Number).sort((a, b) => a - b)
);

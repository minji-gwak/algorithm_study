const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, N, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(computerCount, list) {
  const linkPairList = Array(computerCount).fill(new Set());
  const getVirus = new Set();

  list.forEach((computerNum) => {
    console.log(linkPairList[computerNum[1] - 1], computerNum[1]);
    if (!linkPairList[computerNum[0] - 1].has(computerNum[1])) {
      linkPairList[computerNum[0] - 1].add(computerNum[1]);
    } else if (!linkPairList[computerNum[1] - 1].has(computerNum[0])) {
      linkPairList[computerNum[1] - 1].add(computerNum[0]);
    }
  });
  console.log(linkPairList);

  console.log(getVirus.size - 1);
}

solution(
  Number(L),
  datas.map((x) => x.split(' ').map(Number))
);

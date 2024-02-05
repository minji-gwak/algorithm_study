const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = ([N, M], list) => {
  const sitePwList = list.splice(0, N).map((x) => x.split(' '));
  const siteFindList = list;
  const sitePwMap = new Map();

  sitePwList.forEach((info) => {
    sitePwMap.set(...info);
  });

  console.log(siteFindList.map((site) => sitePwMap.get(site)).join('\n'));
};

solution(L.split(' ').map(Number), datas);

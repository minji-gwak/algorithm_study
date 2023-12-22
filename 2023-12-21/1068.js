const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, data, K] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (parentList, k) => {
  let cnt = 0;

  const dfs = (cutNum, list) => {
    list[cutNum] = null;

    for (let i = 0; i < list.length; i++) {
      if (cutNum === list[i]) {
        dfs(i, list);
      }
    }
  };

  dfs(k, parentList);

  for (let i = 0; i < parentList.length; i++) {
    if (parentList[i] != null && !parentList.includes(i)) {
      cnt++;
    }
  }
  console.log(cnt);
};

solution(data.split(' ').map(Number), Number(K));

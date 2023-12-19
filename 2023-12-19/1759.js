const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, data] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = ([n, m], sList) => {
  const pwdList = [];
  sList.sort();

  const checkPwd = (combi) => {
    let [consonants, vowels] = [0, 0];

    for (let i = 0; i < combi.length; i++) {
      if (['a', 'e', 'i', 'o', 'u'].includes(combi[i])) {
        vowels++;
      } else {
        consonants++;
      }
    }
    if (consonants >= 2 && vowels >= 1) {
      return true;
    } else {
      return false;
    }
  };

  const backtracking = (combi) => {
    if (combi.length === n) {
      if (checkPwd(combi)) {
        pwdList.push(combi.join(''));
        return;
      }
    }

    for (let idx = 0; idx < m; idx++) {
      if (combi[combi.length - 1] < sList[idx]) {
        combi.push(sList[idx]);
        backtracking(combi);
        combi.pop();
      }
    }
  };

  for (let i = 0; i <= m - n; i++) {
    backtracking([sList[i]]);
  }
  console.log(pwdList.join('\n'));
};

solution(L.split(' ').map(Number), data.split(' '));

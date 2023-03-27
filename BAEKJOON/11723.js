const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(commandList) {
  const calculatationSet = new Set();
  commandList.forEach((fullCommand) => {
    let [cmd, num] = fullCommand;
    switch (cmd) {
      case 'add':
        if (!calculatationSet.has(num)) {
          calculatationSet.add(num);
        }
        break;
      case 'remove':
        if (!calculatationSet.has(num)) {
          calculatationSet.delete(num);
        }
        break;
      case 'check':
        console.log(calculatationSet.has(num) ? 1 : 0);
        break;
      case 'toggle':
        if (calculatationSet.has(num)) {
          calculatationSet.delete(num);
        } else {
          calculatationSet.add(num);
        }
        break;
      case 'all':
        calculatationSet.clear();
        for (let n = 0; n <= 20; n++) {
          calculatationSet.add(n);
        }
        break;
      case 'empty':
        calculatationSet.clear();
        break;
    }
  });
}

solution(input.splice(1).map((x) => x.split(' ')));

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const queue = new Array();
  const answer = new Array();

  input.forEach((command) => {
    let [cmd, num] = command.split(' ');

    switch (cmd) {
      case 'push':
        queue.push(num);
        break;
      case 'pop':
        answer.push(queue.length > 0 ? queue.shift() : -1);
        break;
      case 'size':
        answer.push(queue.length);
        break;
      case 'empty':
        answer.push(queue.length === 0 ? 1 : 0);
        break;
      case 'front':
        answer.push(queue.length > 0 ? queue[0] : -1);
        break;
      case 'back':
        answer.push(queue.length > 0 ? queue[queue.length - 1] : -1);
        break;
    }
  });
  console.log(answer.join('\n'));
}

solution(input.splice(1));

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const stack = new Array();
  const answer = new Array();

  input.forEach((command) => {
    let [cmd, num] = command.split(' ');

    switch (cmd) {
      case 'push':
        stack.unshift(num);
        break;
      case 'pop':
        answer.push(stack.length > 0 ? stack.shift() : -1);
        break;
      case 'size':
        answer.push(stack.length);
        break;
      case 'empty':
        answer.push(stack.length === 0 ? 1 : 0);
        break;
      case 'top':
        answer.push(stack.length > 0 ? stack[0] : -1);
        break;
    }
  });
  console.log(answer.join('\n'));
}

solution(input.splice(1));

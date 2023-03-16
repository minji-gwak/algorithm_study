const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const answer = new Array();
  const deque = new Array();

  for (let i = 0; i < input.length; i++) {
    let [command, num] = input[i].split(' ');

    switch (command) {
      case 'push_front':
        deque.unshift(num);
        break;
      case 'push_back':
        deque.push(num);
        break;
      case 'pop_front':
        answer.push(deque.length > 0 ? deque.shift() : -1);
        break;
      case 'pop_back':
        answer.push(deque.length > 0 ? deque.pop() : -1);
        break;
      case 'size':
        answer.push(deque.length);
        break;
      case 'empty':
        answer.push(deque.length === 0 ? 1 : 0);
        break;
      case 'front':
        answer.push(deque.length > 0 ? deque[0] : -1);
        break;
      case 'back':
        answer.push(deque.length > 0 ? deque[deque.length - 1] : -1);
        break;
    }
  }
  console.log(answer.join('\n'));
}

solution(input.splice(1));

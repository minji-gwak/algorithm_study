const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (list) => {
  let n = 0;
  list.forEach((x, i) => {
    if (x !== 'Fizz' && x !== 'Buzz' && x !== 'FizzBuzz') {
      n = Number(x) + (i > 1 ? 1 : i === 1 ? 2 : 3);
    }
  });

  console.log(!(n % 15) ? 'FizzBuzz' : !(n % 3) ? 'Fizz' : !(n % 5) ? 'Buzz' : n);
};

solution(datas);

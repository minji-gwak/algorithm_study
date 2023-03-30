const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let mutiplyInput = String(input[0] * input[1] * input[2]);

for (let i = 0; i < 10; i++) {
  let count = 0;

  for (let j = 0; j < mutiplyInput.length; j++) {
    if (Number(mutiplyInput[j]) === i) {
      count++;
    }
  }

  console.log(count);
}

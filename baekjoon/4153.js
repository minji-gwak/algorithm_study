const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.splice(-1);

input.forEach((lengthStr) => {
  let lengthArr = lengthStr.split(' ').sort((a, b) => a - b);

  if (lengthArr[0] ** 2 + lengthArr[1] ** 2 === lengthArr[2] ** 2) {
    console.log('right');
  } else {
    console.log('wrong');
  }
});

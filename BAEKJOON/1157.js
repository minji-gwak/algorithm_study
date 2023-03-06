const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().toUpperCase(); // 대소문자 구분 X

const result = new Array(26).fill(0); // 알파벳의 개수만큼 배열 생성, 초기값 0

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 65]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? '?' : String.fromCharCode(index + 65));

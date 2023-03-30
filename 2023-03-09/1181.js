const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

// 주어진 단어들 중복 제거
const wordsArr = [...new Set(input)];

// 문제의 조건대로 정렬하기
wordsArr.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(wordsArr.join('\n'));

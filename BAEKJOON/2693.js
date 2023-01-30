const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const iter = input[0];

let ans = [];

for (let i = 1; i <= iter; i++) {
  const arr = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  ans.push(arr[2]);
}

console.log(ans.join('\n'));

// ** 내림차순 정렬에 대힌 문제
// 주어진 배열을 number 타입으로 전환한 후, 내림차순 정렬을 실행한다.
// 반드시, 3번째로 큰 수를 출력해야하므로,
// 정렬된 배열의 2번 인덱스의 값을 ans 배열에 넣어준다.
// 다른 배열에 대해서도 이를 반복한 뒤, ans 배열을 출력해주면 된다.

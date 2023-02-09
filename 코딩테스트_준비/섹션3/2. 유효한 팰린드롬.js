function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));

/* 내 답안 */

// function solution(s) {
//   let answer = 'YES';
//   let arr = s.toLowerCase().match(/[a-z]/g);
//   if (arr.join() != arr.reverse().join()) return 'NO';
//   return answer;
// }

// let str = 'found7, time: study; Yduts; emit, 7Dnuof';
// console.log(solution(str));

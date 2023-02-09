function solution(s) {
  let answer = '';
  let cnt = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));

/* 내 답안 */

// function solution(s) {
//   let answer = '';
//   let beforeChar = s[0];
//   let cnt = 1;
//   answer += beforeChar;
//   for (let i = 1; i < s.length; i++) {
//     if (beforeChar === s[i]) cnt++;
//     else {
//       answer += String(cnt);
//       cnt = 1;
//       beforeChar = s[i];
//       answer += beforeChar;
//     }
//   }
//   return answer;
// }

// let str = 'KKHSSSSSSSE';
// console.log(solution(str));

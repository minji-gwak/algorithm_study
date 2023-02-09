function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));

/* 내 답변 - 앞 뒤로 한번씩 비교해서 최소값 넣기 */

// function solution(s, t) {
//   let answer = [];
//   let pos = s.indexOf(t);
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === t) {
//       pos = i;
//       answer.push(0);
//     } else {
//       answer.push(Math.abs(i - pos));
//     }
//   }

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === t) {
//       pos = i;
//     } else {
//       if (answer[i] > Math.abs(i - pos)) answer[i] = Math.abs(i - pos);
//     }
//   }
//   return answer;
// }

// let str = 'teachermode';
// console.log(solution(str, 'e'));

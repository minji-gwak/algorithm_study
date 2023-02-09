function solution(s) {
  let answer = '';
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution('ksekkset'));

/* 내 답안 */

// function solution(s) {
//   let answer = '';
//   answer = [...new Set(s)].join().replace(/,/g, '');

//   return answer;
// }
// console.log(solution('ksekkset'));

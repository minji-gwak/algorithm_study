function solution(str) {
  let answer = '';
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));

/* 내 답안 */

// function solution(str) {
//   let answer = str.match(/[0-9]/g).join().replace(/,/g, '');

//   return parseInt(answer);
// }

// let str = 'g0en2T0s89eSo0ft';
// console.log(solution(str));

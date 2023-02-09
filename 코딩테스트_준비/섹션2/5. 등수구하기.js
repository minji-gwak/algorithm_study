function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

/* 내 답안 */

// function solution(arr) {
//   let answer = [];
//   let sortByScore = Array.from(arr);
//   sortByScore.sort((a, b) => b - a);

//   for (score of sortByScore) {
//     answer.push(arr.indexOf(score) + 1);
//   }
//   return answer;
// }

// let arr = [87, 89, 92, 100, 76];
// console.log(solution(arr));

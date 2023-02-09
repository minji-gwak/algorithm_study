function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

/* 또 다른 풀이 */

// function findSevenDwarf(arr, notMyDwarf1, notMyDwarf2) {
//   let answer = [];
//   for (value of arr) {
//     if (value != notMyDwarf1 && value != notMyDwarf2) answer.push(value);
//   }
//   return answer;
// }

// function solution(arr) {
//   let answer = [];
//   let sum = arr.reduce((a, b) => a + b, 0);

//   for (tall of arr) {
//     if (tall != sum - 100 - tall && arr.includes(sum - 100 - tall)) {
//       answer = findSevenDwarf(arr, tall, sum - 100 - tall);
//       break;
//     }
//   }

//   return answer;
// }

// let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr));

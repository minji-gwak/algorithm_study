let dailyTemperatures = (temperatures) => {
  const stack = [];
  const waitDates = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    // 스택에 마지막으로 쌓여있는 인덱스 값의 온도가 해당 온도보다 낮을 때 스택에서 제거한다.
    while (stack && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let lowIdx = stack.pop();
      waitDates[lowIdx] = i - lowIdx;
    }
    stack.push(i);
  }
  return waitDates;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// 완전탐색을 이용한 풀이
// 시간 초과 발생

// let dailyTemperatures = (temperatures) => {
//   const waitDates = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     if (i === temperatures.length - 1) {
//       waitDates.push(0);
//       break;
//     }
//     for (let j = i + 1; j < temperatures.length; j++) {
//       if (temperatures[i] < temperatures[j]) {
//         waitDates.push(j - i);
//         break;
//       }
//       if (j === temperatures.length - 1) {
//         waitDates.push(0);
//       }
//     }
//   }
//   return waitDates;
// };

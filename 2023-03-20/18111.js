const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(haveBlocksCount, heightList) {
  const blocksNum = heightList.length; // 주어진 블록 높이의 개수
  const [minHeight, maxHeight] = [Math.min(...heightList), Math.max(...heightList)]; // 탐색의 범위는 주어진 높이 중 최솟값 ~ 최댓값
  let [flatMaxHeight, minTime] = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]; // 평평한 높이의 최댓값, 평평하게 만드는 최소 시간

  for (let flatHeight = minHeight; flatHeight <= maxHeight; flatHeight++) {
    let currentHaveBlocksCount = haveBlocksCount; // i의 높이로 평탄화할 때의 인벤토리 블록 개수 (초기값은 최초의 블록 개수)
    let takenTime = 0; // i의 높이로 평탄화할 때 걸리는 시간

    for (let j = 0; j < blocksNum; j++) {
      if (heightList[j] > flatHeight) {
        let removeCount = heightList[j] - flatHeight; // * 제거하는 블록 개수
        currentHaveBlocksCount += removeCount; // 제거한만큼 인벤토리에 추가
        takenTime = takenTime + 2 * removeCount; // 제거할 때 개당 2초씩 소요
      } else if (heightList[j] < flatHeight) {
        let addCount = flatHeight - heightList[j]; // * 추가하는 블록 개수
        currentHaveBlocksCount -= addCount; // 추가한만큼 인벤토리에서 제거
        takenTime = takenTime + addCount; // 추가할 때 개당 1초씩 소요
      }
    }

    // 정상적으로 평지를 만들 수 있는 경우라면, 인벤토리에 있는 블록의 수는 음수일 수 없다.
    if (currentHaveBlocksCount >= 0) {
      if (minTime > takenTime) {
        // 최솟값을 발견했을 때
        minTime = takenTime;
        flatMaxHeight = flatHeight;
      } else if (minTime === takenTime) {
        // 시간의 최솟값이 여러개인 경우
        flatMaxHeight = Math.max(flatMaxHeight, flatHeight); // 높이의 최댓값을 찾는다.
      }
    }
  }
  console.log(minTime, flatMaxHeight);
}

solution(Number(L.split(' ')[2]), [].concat(...datas.map((x) => x.split(' ').map(Number))));

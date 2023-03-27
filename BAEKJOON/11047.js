const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution([haveCoinCount, coinSum], coinTypeList) {
  let coinCount = 0; // 필요한 동전 개수

  for (let n = haveCoinCount - 1; n > -1; n--) {
    let currentCoin = coinTypeList[n]; // 현재 코인 종류

    // 현재 코인 <= 남은 코인의 합
    if (currentCoin <= coinSum) {
      coinCount += Math.floor(coinSum / currentCoin); // 현재 코인 종류에서 계산할 수 있는 최대 개수
      coinSum %= currentCoin; // 남은 금액에서 현재 코인으로 계산하고 남은 값

      // 남은 코인의 합이 없을 때
      if (coinSum === 0) {
        break;
      }
    }
  }

  console.log(coinCount);
}

solution(L.split(' ').map(Number), datas.map(Number));

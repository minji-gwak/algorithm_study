const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(sugarWeight) {
  let maxFiveBags = Math.floor(sugarWeight / 5);
  let bagsCount = 0;

  // 5kg 봉지에 최대치로 넣었을 때, 정확한 무게만큼 가져갈 수 없다면
  // 3kg, 5kg 봉지에 정확히 담아갈 수 있을 때까지 5kg 봉지를 하나씩 뺀다.
  while (true) {
    let leftWeight = sugarWeight - 5 * maxFiveBags;
    if (leftWeight % 3 !== 0 && maxFiveBags >= 0) maxFiveBags--;
    else if (leftWeight % 3 === 0 && maxFiveBags >= 0) {
      bagsCount = maxFiveBags + parseInt(leftWeight / 3);
      break;
    } else {
      bagsCount = -1;
      break;
    }
  }
  console.log(bagsCount);
}

solution(input);

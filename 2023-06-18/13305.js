const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (N, [distances, fuelPrices]) => {
  let lowFuelPrice = fuelPrices[0];
  let totalCost = 0n;

  for (let i = 1; i < N; i++) {
    totalCost += lowFuelPrice * distances[i - 1];

    lowFuelPrice = lowFuelPrice > fuelPrices[i] ? fuelPrices[i] : lowFuelPrice;
  }
  console.log(totalCost.toString());
};

solution(
  Number(L),
  datas.map((x) => x.split(' ').map(BigInt))
);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const roomArr = new Array();

  for (let i = 0; i < input.length; i++) {
    let [height, width, nth] = input[i].split(' ').map(Number);
    let roomNum = 1;

    while (nth > height) {
      roomNum++;
      nth = nth - height;
    }

    if (roomNum < 10) {
      roomArr.push(`${nth}0${roomNum}`);
    } else {
      roomArr.push(`${nth}${roomNum}`);
    }
  }
  console.log(roomArr.join('\n'));
}

solution(input.splice(1));

// 틀렸다고 나오는데 왜인지 잘 모르겠는 답안
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// function solution(input) {
//   input.forEach((info) => {
//     let [height, width, nth] = info.split(' ').map(Number);
//     let [floorNum, roomNum] = [
//       nth % height !== 0 ? nth % height : height,
//       nth % height !== 0 ? Math.ceil(nth / height) : Math.floor(nth / height),
//     ];

//     if (nth / height < 10) {
//       roomNum = console.log(`${floorNum}0${roomNum}`);
//     } else {
//       console.log(`${floorNum}${roomNum}`);
//     }
//   });
// }

// solution(input.splice(1));

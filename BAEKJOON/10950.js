const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  input.forEach((nums) => {
    nums = nums.split(' ').map(Number);
    nums = nums[0] + nums[1];
    console.log(nums);
  });
}

solution(input.splice(1));

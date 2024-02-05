const twoSum = (numbers, target) => {
  let [start, end] = [0, numbers.length - 1];

  while (numbers[start] + numbers[end] !== target) {
    if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }
  return [start + 1, end + 1];
};

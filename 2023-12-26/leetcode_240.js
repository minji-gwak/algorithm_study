const searchMatrix = (matrix, target) => {
  let [row, col] = [matrix.length, matrix[0].length];

  for (let i = 0; i < row; i++) {
    let [low, high] = [0, col];

    while (low < high) {
      let mid = ~~((low + high) / 2);

      if (matrix[i][mid] === target) {
        return true;
      } else if (matrix[i][mid] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
  }
  return false;
};

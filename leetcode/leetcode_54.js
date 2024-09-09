/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = (matrix) => {
  const result = [];

  while (matrix.length > 0) {
    result.push(...matrix.shift());
    matrix.forEach((row) => result.push(...row.reverse().splice(0, 1)));
    matrix.reverse();
  }

  return result;
};

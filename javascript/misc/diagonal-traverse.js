/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  up = true
  y = 0
  x = 0
  result = []
  while (y < matrix.length && x < matrix[0].length) {
    result.push(matrix[y][x])
    if (up) {
      if (x + 1 < matrix[0].length && y - 1 >= 0) {
        x++
        y--
      } else if (x + 1 >= matrix[0].length) {
        up = false
        y++
      } else if (y - 1 < 0) {
        up = false
        x++
      }
    } else {
      if (y + 1 < matrix.length && x - 1 >= 0) {
        x--
        y++
      } else if (y + 1 >= matrix.length) {
        up = true
        x++
      } else if (x - 1 < 0) {
        up = true
        y++
      }
    }
  }
  return result
};

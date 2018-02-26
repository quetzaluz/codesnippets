/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix[0] == null) { return false }
    var maxRowIdx = matrix[0].length - 1
    for (var i = 0; i < matrix.length; i++) {
        if (matrix[i][0] <= target && matrix[i][maxRowIdx] >= target) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == target) { return true }
            }
        }
    }
    return false
};
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (var i = 0; i < matrix.length - 1; i++) {
        var maxCheck = i === 0 ? matrix[0].length - 1 : 1;
        for (var j = 0; j < maxCheck; j++) {
            var val = matrix[i][j];
            // Check diagonals for this val
            var c = j + 1;
            var r = i + 1;
            while (r < matrix.length && c < matrix[0].length) {
                if (matrix[r][c] !== val) {
                    return false;
                }
                c++;
                r++;
            }
        }
    }
    return true;
};

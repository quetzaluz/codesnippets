/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var temp = 0;
    for (var c = 0; c < matrix.length; c++) {
        for (var r = 0; r < matrix[c].length; r++) {
            if (c < r) {
                temp = matrix[c][r];
                matrix[c][r] = matrix[r][c];
                matrix[r][c] = temp;
            }
        }
    }
    for (var c = 0; c < matrix.length; c++) {
        for (var r = 0; r < Math.round(matrix[c].length /2); r++) {
            temp = matrix[c][r];
            matrix[c][r] = matrix[c][matrix[c].length - 1- r];
            matrix[c][matrix[c].length - 1 - r] = temp;              
        }
    }
};

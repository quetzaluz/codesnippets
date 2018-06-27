/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var paths = [];
    for (var i = 0; i < m; i++) {
        var newArr = [];
        for (var j = 0; j < n; j++) {
            newArr.push(0);
        }
        paths.push(newArr);
    }
    paths[0][0] = 1;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (i > 0) {
                paths[i][j] += paths[i - 1][j];
            }
            if (j > 0) {
                paths[i][j] += paths[i][j - 1];
            }
        }
    }
    return paths[m - 1][n - 1];
};

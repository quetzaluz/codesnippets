/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid.length > 0 ? obstacleGrid[0].length : 0;
    var paths = [];
    for (var i = 0; i < m; i++) {
        var newArr = [];
        for (var j = 0; j < n; j++) {
            newArr.push(0);
        }
        paths.push(newArr);
    }
    paths[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                continue;
            }
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

/**
 * @param {number[][]} matrix
 * @return {number}
 *
 * longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]) => 4
 */
var longestIncreasingPath = function(matrix) {
    var lP = []; // for storing longest paths at each coord
    var rL = matrix.length;
    var max = 0;
    var i,j;
    
    if (rL === 0) { return 0 }

    var cL = matrix[0].length;

    // initialize matrix for storing longest paths.
    for (i = 0; i < rL; i++) {
        for (j = 0; j < cL; j++) {
            if (j === 0) { lP.push(new Array(cL)) }
            lP[i][j] = 0; // initialize longest path at this coord
        }
    }

    for (i = 0; i < rL; i++) {
        for (j = 0; j < cL; j++) {
            // find longest path at each coord
            max = Math.max(max, pP(i, j, rL, cL, matrix, lP))
        }
    }

    return max;
};

var pP = function (i, j, rL, cL, matrix, lP) {
    // recursively crawl coordniates and find longest path for i, j in base matrix
    if (lP[i][j] !== 0) { return lP[i][j] }
    var cX = [1, 0, 0, -1]
    var cY = [0, 1, -1, 0]
    var max = 1
    var m, x, y;

    for (m = 0; m < 4; m++) {
        x = cX[m] + i;
        y = cY[m] + j;
        if (x >= 0 && y >= 0 && x < rL && y < cL && matrix[x][y] > matrix[i][j]) {
            max = Math.max(max, 1 + pP(x, y, rL, cL, matrix, lP))
        }
    }
    lP[i][j] = max;
    return max;
}
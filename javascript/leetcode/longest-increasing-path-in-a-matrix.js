/**
 * @param {number[][]} matrix
 * @return {number}
 *
 * longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]) => 4
 */
var longestIncreasingPath = function(matrix) {
    var lP = [];
    var rL = matrix.length;
    var max = 0;
    var i,j;
    
    if (rL === 0) { return 0 }
    
    var cL = matrix[0].length;
    
    for (i = 0; i < rL; i++) {
        lP.push(new Array(cL))
    }
    
    for (i = 0; i < rL; i++) {
        for (j = 0; j < cL; j++) {
            lP[i][j] = 0
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
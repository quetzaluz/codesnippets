/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let smoothed = []
    for (var c = 0; c < M.length; c++) {
        if (smoothed.length <= c) {
            smoothed.push([])
        }
        for (var r = 0; r < M[c].length; r++) {
            smoothed[c].push(smoothPixel(M, c, r))
        }
    }
    return smoothed
};

var smoothPixel = function(M, c, r) {
    totalCount = 0
    totalBlack = 0
    for (var cCoord = c - 1; cCoord <= c + 1; cCoord++) {
        for (var rCoord = r - 1; rCoord <= r + 1; rCoord++) {
            if (cCoord < M.length && cCoord >= 0 && rCoord < M[0].length && rCoord >= 0) {
                totalCount++
                totalBlack += M[cCoord][rCoord]
            }
        }
    }
    return Math.floor(totalBlack / totalCount)
}

/**
 * @param {number[][]} grid
 * @return {number}
 */

// islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])

var islandPerimeter = function(grid) {
    var s; // square we will be inspecting
    var p = 0; // perimiter
    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid[r].length; c++) {
            var s = grid[r][c]
            if (s == 1) {
                p += countPerim(r, c, grid)
            }
        }
    }
    return p
};

var countPerim = function (r, c, grid) {
    var p = 0
    if (!grid[r - 1] || grid[r - 1][c] == 0) {
        // north is ocean or blank
        p += 1
    }
    if (!grid[r + 1] || grid[r + 1][c] == 0) {
        // south is ocean or blank
        p += 1
    }
    if (grid[r][c-1] != 1) {
        // east is ocean or blank
        p += 1
    }
    if (grid[r][c+1] != 1) {
        // west is ocean or blank
        p += 1
    }
    return p
}

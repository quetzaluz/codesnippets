/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    maxArea = 0
    seen = []
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1 && seen.indexOf([i, j] == -1)) {
                stack = [[i, j]]
                seen.push(i+','+j)
                thisArea = 0
                while(stack.length > 0) {
                    thisCoord = stack.pop()
                    thisArea++
                    if (grid[thisCoord[0]][thisCoord[1]+1] == 1 && seen.indexOf(thisCoord[0]+','+(thisCoord[1]+1)) == -1) {
                        stack.push([thisCoord[0], thisCoord[1]+1])
                        seen.push(thisCoord[0]+','+(thisCoord[1]+1))
                    }
                    if (grid[thisCoord[0]][thisCoord[1]-1] == 1 && seen.indexOf(thisCoord[0]+','+(thisCoord[1]-1)) == -1) {
                        stack.push([thisCoord[0], thisCoord[1]-1])
                        seen.push(thisCoord[0]+','+(thisCoord[1]-1))
                    }
                    if (grid[thisCoord[0]-1] && grid[thisCoord[0]-1][thisCoord[1]] == 1 && seen.indexOf((thisCoord[0]-1)+','+thisCoord[1]) == -1) {
                        stack.push([thisCoord[0]-1, thisCoord[1]])
                        seen.push((thisCoord[0]-1)+','+(thisCoord[1]))
                    }
                    if (grid[thisCoord[0]+1] && grid[thisCoord[0]+1][thisCoord[1]] == 1 && seen.indexOf((thisCoord[0]+1)+','+thisCoord[1]) == -1) {
                        stack.push([thisCoord[0]+1, thisCoord[1]])
                        seen.push((thisCoord[0]+1)+','+(thisCoord[1]))
                    }
                }
                if (thisArea > maxArea) {maxArea = thisArea}
            }
        }
    }
    return maxArea
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    count = 0
    seen = []
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1 && seen.indexOf((i +','+ j)) == -1) {
                stack = [[i, j]]
                seen.push(i+','+j)
                count++ // We've found an island, now just have to mark all as seen
                while (stack.length > 0) {
                    thisCoord = stack.pop()
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

            }
        }
    }
    return count
};
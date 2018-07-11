'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the maxRegion function below.
function maxRegion(grid) {
    var maxArea = 0
    var seen = []
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1 && seen.indexOf(i +','+j) == -1) {
                var stack = [[i, j]]
                seen.push(i+','+j)
                var thisArea = 0
                while(stack.length > 0) {
                    var thisCoord = stack.pop()
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
                    if (grid[thisCoord[0]+1] && grid[thisCoord[0]+1][thisCoord[1]+1] == 1 && seen.indexOf((thisCoord[0]+1)+','+(thisCoord[1]+1)) == -1) {
                        stack.push([thisCoord[0]+1, thisCoord[1]+1])
                        seen.push((thisCoord[0]+1)+','+(thisCoord[1]+1))
                    }
                    if (grid[thisCoord[0]+1] && grid[thisCoord[0]+1][thisCoord[1]-1] == 1 && seen.indexOf((thisCoord[0]+1)+','+(thisCoord[1]-1)) == -1) {
                        stack.push([thisCoord[0]+1, thisCoord[1]-1])
                        seen.push((thisCoord[0]+1)+','+(thisCoord[1]-1))
                    }
                    if (grid[thisCoord[0]-1] && grid[thisCoord[0]-1][thisCoord[1]-1] == 1 && seen.indexOf((thisCoord[0]-1)+','+(thisCoord[1]-1)) == -1) {
                        stack.push([thisCoord[0]-1, thisCoord[1]-1])
                        seen.push((thisCoord[0]-1)+','+(thisCoord[1]-1))
                    }
                    if (grid[thisCoord[0]-1] && grid[thisCoord[0]-1][thisCoord[1]+1] == 1 && seen.indexOf((thisCoord[0]-1)+','+(thisCoord[1]+1)) == -1) {
                        stack.push([thisCoord[0]-1, thisCoord[1]+1])
                        seen.push((thisCoord[0]-1)+','+(thisCoord[1]+1))
                    }
                }
                if (thisArea > maxArea) {maxArea = thisArea}
            }
        }
    }
    return maxArea
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let grid = Array(n);

    for (let i = 0; i < n; i++) {
        grid[i] = readLine().split(' ').map(gridTemp => parseInt(gridTemp, 10));
    }

    const res = maxRegion(grid);

    ws.write(res + '\n');

    ws.end();
}

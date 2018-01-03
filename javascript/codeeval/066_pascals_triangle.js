var fs  = require("fs");
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    iterations = 0
    result = []
    while (iterations < numRows) {
        result.push(generateRow(result[iterations - 1]))
        iterations++
    }
    return result
};

var generateRow = function(lastRow) {
    if (!lastRow) {return [1]}
    newRow = []
    newRow.push(lastRow[0])
    for (var i = 0; i < lastRow.length - 1; i++) {
        newRow.push(lastRow[i] + lastRow[i + 1])
    }
    newRow.push(lastRow[lastRow.length -1])
    return newRow
}

var printTriangle = function(triangle) {
    result = ''
    if (triangle[0]) {
        result = '1'
    }
    for (var i = 1; i < triangle.length; i++) {
        result += ' ' + triangle[i].join(' ')
    }
    return result
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(printTriangle(generate(parseInt(line))))
    }
});
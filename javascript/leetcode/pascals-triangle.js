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
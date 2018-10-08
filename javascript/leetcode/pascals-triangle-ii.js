/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    iterations = 0
    result = []
    while (iterations < rowIndex + 1) {
        result.push(generateRow(result[iterations - 1]))
        iterations++
    }

    return result[rowIndex] 
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

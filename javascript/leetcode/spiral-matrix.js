/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    startN = 0;
    endN = matrix.length - 1;
    startM = 0;
    endM = matrix.length > 0 ? matrix[0].length - 1 : -1;
    result = [];
    while (startN <= endN && startM <= endM) {
        for (var i = startM; i <= endM; i++) {
            result.push(matrix[startN][i]);
        }
        startN++;
        
        for (var i = startN; i <= endN; i++) {
            result.push(matrix[i][endM]);
        }
        endM--;
        
        if (startN <= endN) {
            for (var i = endM; i >= startM; i--) {
                result.push(matrix[endN][i]);
            }
            endN--;
        }
        
        if (startM <= endM) {
            for (var i = endN; i >= startN; i--) {
                result.push(matrix[i][startM]);
            }
            startM++;    
        }
        
    }
    return result;
};

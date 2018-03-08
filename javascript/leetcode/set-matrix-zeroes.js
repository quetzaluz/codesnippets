/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
        toConvert = [] // stack we will build of coords to convert
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0) {
                    ti = i - 1
                    while (ti >= 0) {
                        toConvert.push([ti, j])
                        ti--
                    }
                    ti = i + 1
                    while (ti < matrix.length) {
                        toConvert.push([ti, j])
                        ti++
                    }
                    tj = j - 1
                    while (tj >= 0) {
                        toConvert.push([i, tj])
                        tj--
                    }
                    tj = j + 1
                    while (tj < matrix[i].length) {
                        toConvert.push([i, tj])
                        tj++
                    }
                }
            }  
        }

        for (var i = 0; i < toConvert.length; i++) {
            c = toConvert[i]
            matrix[c[0]][c[1]] = 0
        }
};

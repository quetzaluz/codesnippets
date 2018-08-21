/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    B = [];
    for (let i = 0; i < A[0].length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (B.length <= i) {
                B.push([]);
            }
            B[i].push(A[j][i]);
        }
    }
    return B;
};

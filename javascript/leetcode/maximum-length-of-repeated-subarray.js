/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    memo = []
    for (var i = 0; i <= A.length; i++) {
        arr = []
        for (var j = 0; j <= B.length; j++) {
            arr.push(0)
        }
        memo.push(arr)
    }
    for (var i = A.length - 1; i >= 0; i--) {
        for (var j = B.length - 1; j >= 0; j--) {
            if (A[i] == B[j]) {
                memo[i][j] = memo[i+1][j+1]+1
            }
        }
    }
    var max = 0
    for (var i = 0; i < memo.length; i++) {
        for (var j = 0; j < memo[i].length; j++) {
            if (memo[i][j] > max) { max = memo[i][j] }
        }
    }
    return max
};
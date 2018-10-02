/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    if (A.length == 0) { return 0; }
    var rSum = 0;
    var allSum = 0;
    for (var i = 0; i < A.length; i++) {
        var n = A[i];
        rSum += n * i;
        allSum += n;
    }
    var result = rSum;
    for (var i = A.length - 1; i >= 0; i--) {
        rSum = rSum + allSum - A.length * A[i];
        result = Math.max(rSum, result);
    }
    return result;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var pow = function(x, n) {
    if (n == 0) {
        return 1
    }
    partialPow = pow(x, parseInt(n / 2))
    if (n % 2 === 0) {
        res = partialPow * partialPow
    } else {
        res = x * partialPow * partialPow
    }
    return res
};

var myPow = function(x, n) {
    res = pow(x, n < 0 ? n * - 1 : n)
    return n < 0 ? 1 / res : res
};

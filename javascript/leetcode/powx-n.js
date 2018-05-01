/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n == 0) { return 1 }
    neg = n <= 0
    ite = (neg ? n * -1 : n) - 1
    res = x
    while (ite > 0) {
        res *= x
        ite--
    }
    if (neg) { res = 1 / res }
    return res
};

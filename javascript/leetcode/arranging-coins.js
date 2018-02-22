/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    step = 1
    rows = 0
    while (n >= 0) {
        if (n - step >= 0) {
            rows++
        }
        n -= step
        step++
    }
    return rows
};
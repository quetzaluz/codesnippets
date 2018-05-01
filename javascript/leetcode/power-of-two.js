/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while (n > 2) {
        n /= 2
    }

    return n === 2 || n === 1
};

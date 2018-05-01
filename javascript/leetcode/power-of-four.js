/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    while (num > 4) {
        num /= 4
    }

    return num === 4 || num === 1
};

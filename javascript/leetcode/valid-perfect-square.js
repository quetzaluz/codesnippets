/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num <= 1) { return true }
    i = 1
    while (i <= num / 2) {
        if (i * i == num) { return true }
        i++
    }
    return false
};
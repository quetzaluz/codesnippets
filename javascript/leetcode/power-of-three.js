/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfThree = function(num) {
    while (num > 3) {
        num /= 3
    }
    
    return num === 3 || num === 1
};

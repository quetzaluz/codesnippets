/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    stX = '' + x
    if (stX[0] == '-') {x = stX.slice(1)}
    halfLength = Math.floor(stX.length / 2)
    for (var i = 0; i < halfLength; i++) {
        if (stX[i] != stX[stX.length - (i + 1)]) { return false }
    }
    return true
};
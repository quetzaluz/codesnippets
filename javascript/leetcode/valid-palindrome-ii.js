/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindromSubsequence = function(p1, p2, s) {
    for (var k = p1; k < p2; k++) {
        if (s[k] !== s[p2 - k + p1]) {
            return false
        }
    }
    return true
}

var validPalindrome = function(s) {
    p1 = 0
    s = s.toLowerCase()
    while (p1 < Math.floor(s.length / 2)) {
        p2 = s.length - p1 - 1
        if (s[p1] !== s[p2]) {
            return validPalindromSubsequence(p1 + 1, p2, s) || validPalindromSubsequence(p1, p2 - 1, s)
        }
        p1++
    }
    return true    
};

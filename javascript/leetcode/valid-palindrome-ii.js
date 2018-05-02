/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s, skippedOnce) {
    if (s == '') { return true }
    p1 = 0
    p2 = s.length - 1
    s = s.toLowerCase()
    while (p1 < p2) {
        if (s[p1] !== s[p2]) {
            if (skippedOnce || (s[p1] !== s[p2 - 1] && s[p1 + 1] !== s[p2])) {
                return false
            } else {
                skippedOnce = true
            }
            if (s[p1] === s[p2 - 1]) {
                if (validPalindrome(s.slice(p1, p2), true)) {
                    return true
                }
            }
            if (s[p1 + 1] === s[p2]) {
                if(validPalindrome(s.slice(p1 + 1, p2 + 1), true)) {
                    return true
                }
            }
            return false
        }  else {
            p1++
            p2--
        }
    }
    return true    
};

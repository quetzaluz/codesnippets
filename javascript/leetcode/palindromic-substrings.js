/**
 * @param {string} s
 * @return {boolean}
 */
var alphanum = 'qwertyuiopasdfghjklzxcvbnm0987654321'

var isPalindrome = function(s) {
    if (s.length == 1) { return true }
    if (s == '') { return false }
    p1 = 0
    p2 = s.length - 1
    s = s.toLowerCase()
    while (p1 < p2) {
        if (alphanum.indexOf(s[p1]) == -1) {
            p1++
        } else if (alphanum.indexOf(s[p2]) == -1) {
            p2--
        } else if (s[p1] !== s[p2]) {
            return false
        }  else {
            p1++
            p2--
        }
    }
    return true
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    start = 0
    c = 0
    while (start < s.length) {
        for (var i = start + 1; i <= s.length; i++) {
            substr = s.slice(start, i)
            c += isPalindrome(substr) ? 1 : 0
        }
        start++
    }
    return c
};
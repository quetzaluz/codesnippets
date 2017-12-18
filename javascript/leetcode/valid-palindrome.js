/**
 * @param {string} s
 * @return {boolean}
 */
var alphanum = 'qwertyuiopasdfghjklzxcvbnm0987654321'

var isPalindrome = function(s) {
    if (s == '') { return true }
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
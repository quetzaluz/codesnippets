/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length == 0) {return true}
    for (var i = 0; i < t.length; i++) {
        if (t[i] == s[0]) {
            s = s.slice(1)
        }
        if (s.length == 0) {return true}
    }
    return false
};
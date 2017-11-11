/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    t = ''
    for (var i = (s.length - 1); i >= 0; i--) {
        t += s[i]
    }
    return t
};
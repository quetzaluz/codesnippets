/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    seen = {}
    for (var i = 0; i < s.length; i++) {
        seen[s[i]] = seen[s[i]] ? seen[s[i]] + 1 : 1
    }
    evens = 0
    odds = 0
    Object.keys(seen).forEach(function(k) {
        if (seen[k] % 2 == 0) {
            evens += seen[k]
        } else {
            odds = seen[k] > odds ? seen[k] : odds
        }
    })
    return evens + odds
};

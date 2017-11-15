/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    b = n.toString(2)
    t = null
    for (var i = 0; i < b.length; i++) {
        if (b[i] == t) { return false }
        t = b[i]
    }
    return true
};

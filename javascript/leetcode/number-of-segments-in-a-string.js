/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    isSeg = false
    segCount = 0
    for (var i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            if (isSeg) {segCount++}
            isSeg = false
        } else {
            isSeg = true
        }
    }
    segCount += isSeg ? 1 : 0
    return segCount
};
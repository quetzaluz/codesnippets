/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var seen = {}
    for (var i = 0; i < s.length; i++) {
        if (seen[s[i]]) { seen[s[i]].count++ }
        else {seen[s[i]] = {firstIdx: i, count: 1}}
    }
    var earliestIdx = -1
    for (key in seen) {
        if (seen[key].count == 1) {
            if (earliestIdx == -1) {earliestIdx = seen[key].firstIdx}
            else if (seen[key].firstIdx < earliestIdx) {
                earliestIdx = seen[key].firstIdx
            }
        }
    }
    return earliestIdx
};
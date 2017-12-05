/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    currentSubstr = ''
    longestSubstr = ''
    lastIdx = 0
    for (var i = (lastIdx + 0); i < s.length; i++) {
        indexOfExisting = currentSubstr.indexOf(s[i])
        if (indexOfExisting == -1) {
            currentSubstr += s[i]
        } else {
            if (currentSubstr.length > longestSubstr.length) {
                longestSubstr = currentSubstr
            }
            currentSubstr += s[i]
            currentSubstr = currentSubstr.slice(indexOfExisting+1)
        }
    }
    if (currentSubstr.length > longestSubstr.length)  { longestSubstr = currentSubstr }
    return longestSubstr.length
};
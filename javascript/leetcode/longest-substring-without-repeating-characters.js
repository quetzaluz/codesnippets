/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    currentSubstr = ''
    longestSubstr = ''
    lastIdx = 0
    while (lastIdx < s.length) {
        for (var i = (lastIdx + 0); i < s.length; i++) {
            if (currentSubstr.indexOf(s[i]) == -1) {
                currentSubstr += s[i]
                lastIdx++
            } else {
                if (currentSubstr.length > longestSubstr.length) {
                    longestSubstr = currentSubstr
                }
                currentSubstr = ''
                break
            }
        }
    }
    if (currentSubstr.length > longestSubstr.length)  { longestSubstr = currentSubstr }
    return longestSubstr.length
};
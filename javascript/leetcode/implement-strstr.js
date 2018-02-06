/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == '') { return 0 }
    var i = 0
    while (i < haystack.length + 1 - needle.length) {
        if (haystack[i] == needle[0]) {
            j = 0
            originalI = i
            while (j < needle.length) {
                if (needle[j] == haystack[i] ) {
                    j++
                    i++
                } else {
                    break
                }
            }
            if (j == needle.length) {
                return originalI
            } else {
                i = originalI
            }
        }
        i++
    }
    return -1
};
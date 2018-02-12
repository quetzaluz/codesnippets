/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    lastChar = chars[0]
    lastCharCount = 1
    lastIdx = 0
    for (var i = 1; i < chars.length; i++) {
        if (chars[i] == lastChar) {
            lastCharCount++
        } else {
            chars[lastIdx] = lastChar
            lastIdx++
            if (lastCharCount > 1) {
                lastCnt = lastCharCount + ''
                for (var j = 0; j < lastCnt.length; j++) {
                    chars[lastIdx] = (lastCnt[j])
                    lastIdx++
                }
            }
            lastChar = chars[i]
            lastCharCount = 1
        }
    }
    chars[lastIdx] = lastChar
    lastIdx++
    if (lastCharCount > 1) {
        lastCnt = lastCharCount + ''
        for (var j = 0; j < lastCnt.length; j++) {
            chars[lastIdx] = (lastCnt[j])
            lastIdx++
        }
    }
    chars.splice(lastIdx)
    return chars.length
};
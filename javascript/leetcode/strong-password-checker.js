/**
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function(s) {
    conditionsNeeded = 3 // uppercase, lowercase, digit
    conditionsMet = 0
    consecutiveSequences = 0
    hasLower = 0
    hasUpper = 0
    hasDigit = 0
    hasCorrectLength = s.length >= 6 && s.length <= 20
    var lastCharaCount = 0
    var lastChara
    for (var i = 0; i < s.length; i++) {
        if (s[i] == lastChara) {
            lastCharaCount++
        } else {
            lastCharaCount = 1
        }
        if (lastCharaCount == 3) {
            lastCharaCount = 0
            consecutiveSequences++
        }
        if (isNaN(s[i])) {
            if (s[i] == s[i].toLowerCase()) {
                hasLower = 1
            } else {
                hasUpper = 1
            }
        } else {
            hasDigit = 1
        }
        lastChara = s[i]
    }
    conditionsMet = hasLower + hasUpper + hasDigit
    if (hasCorrectLength && !consecutiveSequences && conditionsMet == conditionsNeeded) {
        return 0
    } else if (!hasCorrectLength) {
        if (s.length < 6) {
            return Math.max(6 - s.length, Math.max(conditionsNeeded - conditionsMet, consecutiveSequences))
        } else {
            return (s.length - 20) + Math.max(conditionsNeeded - conditionsMet, consecutiveSequences - (s.length - 20))
        }
    } else {
        return Math.max(conditionsNeeded - conditionsMet, consecutiveSequences)
    }
};
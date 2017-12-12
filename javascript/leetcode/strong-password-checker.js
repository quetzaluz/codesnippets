/**
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function(s) {
    conditionsNeeded = 4 // uppercase, lowercase, digit, no repeat
    conditionsMet = 0
    hasStringOfLowercase = 0
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
            lastCharaCount = 0
        }
        if (lastCharaCount == 3) {hasStringOfLowercase++}
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
    conditionsMet = (hasStringOfLowercase ? 0 : 1) + hasLower + hasUpper + hasDigit
    if (hasCorrectLength && conditionsMet == conditionsNeeded) {
        return 0
    } else if (!hasCorrectLength) {
        if (s.length < 6) {
            return Math.max(6 - s.length, conditionsNeeded - conditionsMet)
        } else {
            return Math.max(s.length - 20, conditionsNeeded - conditionsMet)
        }
    } else {
        return conditionsNeeded - conditionsMet
    }
};
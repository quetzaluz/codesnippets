/**
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function(s) {
    conditionsNeeded = 3 // uppercase, lowercase, digit
    hasLower = 0
    hasUpper = 0
    hasDigit = 0
    change = 0
    one = 0
    two = 0
    p = 2
    for (var i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            if (s[i] == s[i].toLowerCase()) {
                hasLower = 1
            } else {
                hasUpper = 1
            }
        } else {
            hasDigit = 1
        }
    }
    conditionsMet = hasDigit + hasLower + hasUpper
    while (p < s.length) {
        if (s[p] == s[p-1] && s[p] == s[p-2]) {
            length = 2
            while (p < s.length && s[p] == s[p-1]) {
                length++
                p++
            }
            change += Math.floor(length / 3)
            if (length % 3 == 0) { one++ }
            else if (length % 3 == 1) { two++ }
        } else {
            p++
        }
    }
    if (s.length < 6) {
        return Math.max(conditionsNeeded - conditionsMet, 6 - s.length)
    } else if (s.length <= 20) {
        return Math.max(conditionsNeeded - conditionsMet, change)
    } else {
        toDelete = s.length - 20
        change -= Math.min(toDelete, one)
        change -= Math.floor(Math.min(Math.max(toDelete - one, 0), two * 2) / 2)
        change -= Math.floor(Math.max(toDelete - one - 2 * two, 0) / 3)
        return toDelete + Math.max(conditionsNeeded - conditionsMet, change)
    }
};
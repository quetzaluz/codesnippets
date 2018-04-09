/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    originalRepeatCount = Math.ceil(B.length / A.length)
    testString = ''
    repeatCount = originalRepeatCount
    while (repeatCount > 0) {
        testString += A
        repeatCount--
    }
    if (testString.indexOf(B) >= 0) { return originalRepeatCount }
    testString += A
    return testString.indexOf(B) >= 0 ? originalRepeatCount + 1 : -1
};

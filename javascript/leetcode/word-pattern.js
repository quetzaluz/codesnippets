/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    pattern2 = str.split(' ')
    if (pattern2.length != pattern.length) { return false }
    ctr1 = 1
    seen1 = {} // for keeping track of seen characters
    encodedPattern1 = [] // push ctr, ctr increments whenever new elem is found
    for (var i = 0; i < pattern.length; i++) {
        if (seen1[pattern[i]]) {
            encodedPattern1.push(seen1[pattern[i]])
        } else {
            seen1[pattern[i]] = ctr1
            encodedPattern1.push(ctr1)
            ctr1++
        }
    }
    ctr2 = 1
    seen2 = {}
    encodedPattern2 = []
    for (var i = 0; i < pattern2.length; i++) {
        if (seen2[pattern2[i]]) {
            encodedPattern2.push(seen2[pattern2[i]])
        } else {
            seen2[pattern2[i]] = ctr2
            encodedPattern2.push(ctr2)
            ctr2++
        }
        if (encodedPattern2[i] != encodedPattern1[i]) { return false }
    }
    return true
};
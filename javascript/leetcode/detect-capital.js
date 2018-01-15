/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.length <= 1) { return true }
    firstWasCap = word[0].toUpperCase() == word[0]
    prevWasCap = firstWasCap ? 1 : 0 // will flip from 0 for lowercase and 1 for capital
    allCap = prevWasCap
    allLower = !prevWasCap
    allLowerAfterFirst = true
    for (var i = 1; i < word.length; i++) {
        allCap = allCap && prevWasCap
        allLower = !prevWasCap && allLower
        allLowerAfterFirst = (i == 1 ? true : !prevWasCap) && allLowerAfterFirst
        if (!allCap && !allLower && !allLowerAfterFirst) { return false }
        prevWasCap = word[i].toUpperCase() == word[i]
    }
    if (allCap && !prevWasCap && word.length > 2) { return false }
    if (allLower && prevWasCap) { return false }
    if (allLowerAfterFirst && prevWasCap && word.length > 2) { return false }
    return true
};
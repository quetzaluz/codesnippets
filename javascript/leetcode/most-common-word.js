/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    seen = {}
    ban = {}
    banned.forEach(function(w) {
        wKey = w.toLowerCase()
        ban[wKey] = 1
    })
    seenMostCount = 0
    seenMostWord = ''
    paragraph.split(' ').forEach(function(w) {
        wKey = w.replace(/[\?!,\.;'"]/, '').toLowerCase()
        if (!ban[wKey]) {
            if (seen[wKey]) {
                seen[wKey]++
            } else {
                seen[wKey] = 1
            }
            if (seen[wKey] > seenMostCount) {
                seenMostCount = seen[wKey]
                seenMostWord = wKey
            }
        }
    })
    return seenMostWord
};

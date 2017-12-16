/**
 * @param {string[]} words
 * @return {string[]}
 */
const r1 = 'qwertyuiop'.split('')
const r2 = 'asdfghjkl'.split('')
const r3 = 'zxcvbnm'.split('')
var findWords = function(words) {
    foundWords = []
    for (var w = 0; w < words.length; w++) {
        word = words[w].toLowerCase()
        hasR1 = 0
        hasR2 = 0
        hasR3 = 0
        for (var c = 0; c < word.length; c++) {
            if (r1.indexOf(word[c]) >= 0) hasR1 = 1
            if (r2.indexOf(word[c]) >= 0) hasR2 = 1
            if (r3.indexOf(word[c]) >= 0) hasR3 = 1
            if ((hasR1 + hasR2 + hasR3) > 1) {break}
        }
        if ((hasR1 + hasR2 + hasR3) == 1) {foundWords.push(words[w])}
    }
    return foundWords
};
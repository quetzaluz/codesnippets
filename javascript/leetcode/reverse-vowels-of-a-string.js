/**
 * @param {string} s
 * @return {string}
 */
var replaceAt = function(string, index, replacement) {
    return string.substr(0, index) + replacement+ string.substr(index + replacement.length);
}

var reverseVowels = function(s) {
    vowels = 'aeiou'
    foundVowels = []
    for (var i = 0; i < s.length; i++) {
       if (vowels.indexOf(s[i].toLowerCase()) !== -1) {
           foundVowels.push([i, s[i]])
       }
    }
    for (var i = 0; i < Math.floor(foundVowels.length / 2); i++) {
        s = replaceAt(s, foundVowels[i][0], foundVowels[foundVowels.length - i - 1][1])
        s = replaceAt(s, foundVowels[foundVowels.length - i - 1][0], foundVowels[i][1])
    }
    return s
};
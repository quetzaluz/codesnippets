/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const lp = pullLetters(licensePlate);
    let minLen = Infinity;
    let shortestWord;
    for (var i = 0; i < words.length; i++) {
        if (hasMatch(lp, words[i])) {
            if (words[i].length < minLen) {
                minLen = words[i].length;
                shortestWord = words[i]; 
            }
        }
    }
    return shortestWord;
};

var pullLetters = function(licensePlate) {
    // downcases letters and strips numbers
    return licensePlate
      .toLowerCase()
      .replace(/[\d|\s]?/g, '')
      .split('');
}

var hasMatch = function(lp, word) {
    // checks if all letters contained in lp char array
    let candidates = lp.slice(0)
    for (var i = 0; i < word.length; i++) {
        let charIndex = candidates.indexOf(word[i]);
        if (charIndex !== -1) {
            candidates.splice(charIndex, 1);
        }
        if (candidates.length === 0) { return true; }
    }
    return false;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
    foundIndexes = []
    pLen = p.length
    for (var i = 0; i < s.length - (pLen - 1); i++) {
      if (subStringIsAnagram(s.substring(i, i + pLen), p)) {
        foundIndexes.push(i)
      }
    }
    return foundIndexes;
};

var subStringIsAnagram = function (s, p) {
  pArr = p.split('')
  for (var c = 0; c < s.length; c++) {
    letterIndex = pArr.indexOf(s[c])
    if (letterIndex > -1) {
      pArr.splice(letterIndex, 1)
    } else {
      return false;
    }
  }
  return true
}

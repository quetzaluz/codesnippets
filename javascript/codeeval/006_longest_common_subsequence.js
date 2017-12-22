var findSubsequence = function (s1, s2) {
  longestSubsequence = ''
  startIdx = 0
  while (startIdx < s1.length) {
    thisSubsequence = ''
    lastIdx = 0
    for (var i = startIdx; i < s1.length; i++) {
      j = lastIdx
      while (j < s2.length) {
        if (s1[i] == s2[j]) {
          thisSubsequence += s1[i]
          lastIdx = j
        }
        j++
      }
    }
    if (thisSubsequence.length > longestSubsequence.length) {
      longestSubsequence = thisSubsequence
    }
    startIdx++
  }
  return longestSubsequence
}
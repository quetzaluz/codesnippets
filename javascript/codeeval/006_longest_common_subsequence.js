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
          break
        }
        j++
      }
    }
    if (thisSubsequence.length > longestSubsequence.length) {
      longestSubsequence = thisSubsequence
    }
    startIdx++
  }
  startIdx = 0
  while (startIdx < s2.length) {
    thisSubsequence = ''
    lastIdx = 0
    for (var i = startIdx; i < s2.length; i++) {
      j = lastIdx
      while (j < s1.length) {
        if (s2[i] == s1[j]) {
          thisSubsequence += s2[i]
          lastIdx = j
          break
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
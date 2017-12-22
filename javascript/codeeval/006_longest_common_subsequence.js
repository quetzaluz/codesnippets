var findSubsequence = function (s1, s2) {
	lastIdx = 0
	subsequence = ''
	for (var i = 0; i < s1.length; i++) {
		j = lastIdx
		while (j < s2.length) {
			if (s1[i] == s2[j]) {
				subsequence += s1[i]
				lastIdx = j
				break
			}
			j++
		}
	}
	return subsequence
}
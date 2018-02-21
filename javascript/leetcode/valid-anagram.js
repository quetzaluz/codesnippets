/**
 *  * @param {string} s
 *   * @param {string} t
 *    * @return {boolean}
 *     */
var isAnagram = function(s, t) {
	var letCntsS = {}
	var letCntsT = {}
	if (s.length != t.length) { return false }
	for (var i = 0; i < s.length; i++) {
		letCntsS[s[i]] = letCntsS[s[i]] ? ++letCntsS[s[i]] : 1
	}
	for (var i = 0; i < t.length; i++) {
		letCntsT[t[i]] = letCntsT[t[i]] ? ++letCntsT[t[i]] : 1
		if (letCntsT[t[i]] > (letCntsS[t[i]] || 0)) { return false }
	}
	return true
};

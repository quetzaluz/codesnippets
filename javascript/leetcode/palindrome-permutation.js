/*
 * Possible implementations of determining whether a string can be a palindrome
 * From https://leetcode.com/articles/palindrome-permutation/
 * Converted from Java to Javascript.
 */

// brute force

var canPermutePalindrome = function (s) {
	var count = 0;
	for (var i = 0; i < 128; i++) {
		var ct = 0;
		for (var j = 0; j < s.length; j++) {
			if (s.charCodeAt(j) == i) {
				ct++;
			}
		}
		count += ct % 2
	}
	return count <= 1
}

// hash map -- my own implementation
// O(n)

var canPermutePalindrome = function (s) {
	var charMap = {}
	for (var i = 0; i < s.length; i++) {
		charMap[s[i]] = (charMap[s[i]] || 0 ) + 1
	}
	ct = 0
	for (key in charMap) {
		ct += charMap[key] % 2
		if (ct > 1) { return false }
	}
	return true
}
class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: int
        """
        seen = {}
        for c in s:
            seen[c] = seen[c] + 1 if c in seen else 1
        evens = 0
        odds = 0
        for k in seen:
            if seen[k] % 2 == 0:
                evens += seen[k]
            else:
                evens += seen[k] - 1
                odds = 1
        return evens + odds

class Solution:
    def validPalindromeSubsequence(self, p1, p2, s):
        for k in range(p1, p2):
            if s[k] != s[p2 - k + p1]:
                return False
        return True

    def validPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        p1 = 0
        s = s.lower()
        while p1 < len(s) / 2:
            p2 = len(s) - p1 - 1
            if s[p1] != s[p2]:
                return (self.validPalindromeSubsequence(p1 + 1, p2, s) or self.validPalindromeSubsequence(p1, p2 - 1, s))
            p1 += 1
        return True

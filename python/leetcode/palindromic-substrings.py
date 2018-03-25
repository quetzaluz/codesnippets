class Solution:
    alphanum = 'qwertyuiopasdfghjklzxcvbnm0987654321'

    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if s == '':
            return False
        if len(s) == 1:
            return True
        p1 = 0
        p2 = len(s) - 1
        s = s.lower()
        while p1 < p2:
            if s[p1] not in self.alphanum:
                p1 += 1
            elif s[p2] not in self.alphanum:
                p2 -= 1
            elif s[p1] != s[p2]:
                return False
            else:
                p1 += 1
                p2 -= 1
        return True

    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        start = 0
        c = 0
        while start < len(s):
            for i in range(len(s) + 1):
                substr = s[start:i]
                c += 1 if self.isPalindrome(substr) else 0
            start += 1
        return c
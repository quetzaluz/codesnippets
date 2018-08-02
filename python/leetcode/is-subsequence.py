class Solution:
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) == 0:
            return True
        for i in range(len(t)):
            if t[i] == s[0]:
                s = s[1:]
            if len(s) == 0:
                return True
        return False

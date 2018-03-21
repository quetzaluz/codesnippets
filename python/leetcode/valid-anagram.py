class Solution:
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        letCntsS = {}
        letCntsT = {}
        if len(s) != len(t):
            return False
        for c in s:
            if c in letCntsS:
                letCntsS[c] = letCntsS[c] + 1
            else:
                letCntsS[c] = 1
        for c in t:
            if c in letCntsT:
                letCntsT[c] = letCntsT[c] + 1
            else:
                letCntsT[c] = 1
            if c not in letCntsS or letCntsT[c] > letCntsS[c]:
                return False
        return True

class Solution:
    def encodeIsomorphic(self, s):
        sH = {}
        sR = ''
        sC = 0
        for c in s:
            if c in sH:
                sR += str(sH[c])
            else:
                sH[c] = sC
                sR += str(sH[c])
                sC += 1
        return sR

    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        return self.encodeIsomorphic(s) == self.encodeIsomorphic(t)

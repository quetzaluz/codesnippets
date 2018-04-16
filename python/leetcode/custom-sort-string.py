class Solution:
    def customSortString(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: str
        """
        l = list(T)
        r = []
        for c in S:
            findIndex = -1
            while findIndex is not None:
                try:
                    findIndex = l.index(c)
                except:
                    findIndex = None
                if findIndex is not None and findIndex is not -1:
                    r.append(l.pop(findIndex))
        return ''.join(r + l)

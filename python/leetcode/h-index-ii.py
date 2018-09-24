class Solution:
    def hIndex(self, citations):
        """
        :type citations: List[int]
        :rtype: int
        """
        ans = 0
        for i, c in enumerate(reversed(citations)):
            if i < c:
                ans += 1
        return ans

class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        max = 0
        min = None
        biggest = 0
        for p in prices:
            if min is None or min > p:
                min = p
            if (p - min) > biggest:
                biggest = p - min
        return biggest

class Solution(object):
    def arrangeCoins(self, n):
        step = 1
        rows = 0
        while n >= 0:
            if (n - step >= 0):
                rows = rows + 1
            n = n - step
            step = step + 1
        return rows

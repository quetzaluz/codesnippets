class Solution:
    def isPowerOfTwo(self, n):
        """
        :type n: int
        :rtype: bool
        """
        while n > 2:
            n /= 2

        return n == 2 or n == 1

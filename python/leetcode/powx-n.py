class Solution:
    def pow(self, x, n):
        if n == 0:
            return 1
        partial_pow = self.pow(x, int(n / 2))
        if n % 2 == 0:
            res = partial_pow * partial_pow
        else:
            res = x * partial_pow * partial_pow
        return res

    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
        res = self.pow(x, n * - 1 if n < 0 else n)
        return 1 / res if n < 0 else res

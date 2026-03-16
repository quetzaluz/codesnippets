class Solution:
    def integerBreak(self, n: int) -> int:
        """
        Break n into k >= 2 positive integers summing to n; maximize their product.

        Why sqrt/"equal buckets" fails: floor(sqrt(3))=1 → [1,1,1] product 1,
        but 1+2 → product 2. Using 1 as a factor is never optimal when you
        can merge (1*a → a). Optimal parts are only 2s and 3s.

        - n==2: only 1+1 → 1
        - n==3: 1+2 beats 1+1+1 → 2
        - n>=4: greedily factor out 3 while remainder > 4, then multiply by remainder.
        """
        if n == 2:
            return 1
        if n == 3:
            return 2
        result = 1
        while n > 4:
            result *= 3
            n -= 3
        result *= n
        return result

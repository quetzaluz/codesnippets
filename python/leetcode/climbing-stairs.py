class Solution:
    def climbStairs(self, n):
        if n == 1:
            return n
        first = 1
        second = 2
        for i in range(3, n+1):
            third = first + second
            first = second
            second = third
        return second

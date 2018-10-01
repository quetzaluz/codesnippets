class Solution:
    def maxRotateFunction(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        if len(A) == 0:
            return 0
        r_sum = 0
        all_sum = 0
        for i in range(len(A)):
            n = A[i]
            r_sum += n * i
            all_sum += n
        result = r_sum
        for i in range(len(A) - 1, 0, -1):
            r_sum = r_sum + all_sum - len(A) * A[i]
            result = max([r_sum, result])
        return result

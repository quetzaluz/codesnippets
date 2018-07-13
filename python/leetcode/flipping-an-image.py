class Solution:
    def flipAndInvertImage(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        if len(A) == 1 and len(A[0]) == 1:
            A[0][0] = 1 if A[0][0] == 0 else 0
            return A
        half_r = len(A[0]) // 2 if len(A) > 0 else 0
        temp = 0
        for c in range(len(A)):
            for r in range(half_r):
                temp = 0 if A[c][r] == 1 else 1
                A[c][r] = 0 if A[c][len(A[c]) - 1 - r] == 1 else 1
                A[c][len(A[c]) - 1 - r] = temp
            if len(A[0]) % 2 == 1:
                # invert middle value
                A[c][half_r] = 0 if A[c][half_r] == 1 else 1
        return A

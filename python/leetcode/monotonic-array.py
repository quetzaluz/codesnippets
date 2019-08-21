class Solution:
    def isMonotonic(self, A: List[int]) -> bool:
        if len(A) == 1:
            return True
        d = 0
        for i in range(len(A) - 1):
            if d == 1:
                if A[i] > A[i + 1]:
                    return False
            elif d == 2:
                if A[i] < A[i + 1]:
                    return False
            else:
                if A[i] < A[i + 1]:
                    d = 1
                elif A[i] > A[i + 1]:
                    d = 2
        return True

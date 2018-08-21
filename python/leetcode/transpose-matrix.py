class Solution:
    def transpose(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        B = []
        for i in range(len(A[0])):
            for j in (range(len(A))):
                if len(B) <= i:
                    B.append([]);
                B[i].append(A[j][i]);
        return B

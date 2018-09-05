class Solution:
    def isToeplitzMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: bool
        """
        for i in range(len(matrix) - 1):
            max_check = len(matrix[0]) - 1 if i == 0 else 1
            for j in range(max_check):
                val = matrix[i][j]
                c = j + 1
                r = i + 1
                while r < len(matrix) and c < len(matrix[0]):
                    if matrix[r][c] != val:
                        return False
                    c += 1
                    r += 1
        return True

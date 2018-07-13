class Solution:
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: void Do not return anything, modify matrix in-place instead.
        """
        temp = 0
        for c in range(len(matrix)):
            for r in range(len(matrix[c])):
                if c < r:
                    # can short hand this with x, y = y, x assignment
                    # Just being more explicit and language agnostic
                    temp = matrix[c][r]
                    matrix[c][r] = matrix[r][c]
                    matrix[r][c] = temp
        for c in range(len(matrix)):
            for r in range(len(matrix[c]) // 2):
                temp = matrix[c][r]
                matrix[c][r] = matrix[c][len(matrix[c]) - 1- r]
                matrix[c][len(matrix[c]) - 1- r] = temp

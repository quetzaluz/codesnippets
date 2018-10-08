class Solution:
    def findDiagonalOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        up = True # current direction of traversal
        y = 0
        x = 0
        result = []
        while y < len(matrix) and x < len(matrix[0]):
            result.append(matrix[y][x])
            if up:
                if x + 1 < len(matrix[0]) and y - 1 >= 0:
                    x = x + 1
                    y = y - 1
                elif x + 1 >= len(matrix[0]):
                    up = False
                    y = y + 1
                elif y - 1 < 0:
                    up = False
                    x = x + 1
            elif not up:
                if y + 1 < len(matrix) and x - 1 >= 0:
                    x = x - 1
                    y = y + 1
                elif y + 1 >= len(matrix):
                    up = True
                    x = x + 1
                elif x - 1 < 0:
                    up = True
                    y = y + 1
        return result

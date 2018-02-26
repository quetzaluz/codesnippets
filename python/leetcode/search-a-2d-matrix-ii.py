class Solution(object):
    def searchMatrix(self, matrix, target):
        if len(matrix) == 0 or len(matrix[0]) == 0:
            return False
        max_row_idx = len(matrix[0]) -1
        for row in matrix:
            if row[0] <= target and row[max_row_idx] >= target:
                for coord in row:
                    if coord == target:
                        return True
        return False

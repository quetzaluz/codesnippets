class Solution:
    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        start_n = 0
        end_n = len(matrix) - 1
        start_m = 0
        end_m = len(matrix[0]) - 1 if len(matrix) > 0 else - 1
        result = []
        
        while start_n <= end_n and start_m <= end_m:
            # Go across the top of the matrix
            for i in range(start_m, end_m + 1):
                result.append(matrix[start_n][i])
            start_n += 1
        
            # Go down the right of the matrix
            for i in range(start_n, end_n + 1):
                result.append(matrix[i][end_m])
            end_m -= 1

            # Go back along the bottom
            if start_n <= end_n:
                for i in range(end_m, start_m - 1, -1):
                    result.append(matrix[end_n][i])
                end_n -= 1

            # Go up along the left
            if start_m <= end_m:
                for i in range(end_n, start_n - 1, -1):
                    print(i)
                    result.append(matrix[i][start_m])
                start_m += 1
        return result

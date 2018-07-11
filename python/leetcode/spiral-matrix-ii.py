class Solution:
    def generateMatrix(self, n):
        """
        :type n: int
        :rtype: List[List[int]]
        """
        start_n = 0
        end_n = n - 1
        start_m = 0
        end_m = n - 1
        matrix = self.initializeMatrix(n)
        position = 1
        while start_n <= end_n and start_m <= end_m:
            # Go across the top of the matrix
            for i in range(start_m, end_m + 1):
                matrix[start_n][i] = position
                position += 1
            start_n += 1

            # Go down the right of the matrix
            for i in range(start_n, end_n + 1):
                matrix[i][end_m] = position
                position += 1
            end_m -= 1

            # Go back along the bottom
            if start_n <= end_n:
                for i in range(end_m, start_m - 1, -1):
                    matrix[end_n][i] = position
                    position += 1
                end_n -= 1

            # Go up along the left
            if start_m <= end_m:
                for i in range(end_n, start_n - 1, -1):
                    matrix[i][start_m] = position
                    position += 1
                start_m += 1
        return matrix

    def initializeMatrix(self, n):
        matrix = []
        for i in range(n):
            matrix.append([0] * n)
        return matrix

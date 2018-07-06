class Solution:
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        paths = []
        for i in range(m):
            new_arr = []
            for j in range(n):
                new_arr.append(0)
            paths.append(new_arr)
        paths[0][0] = 1

        for i in range(m):
            for j in range(n):
                if i > 0:
                    paths[i][j] += paths[i - 1][j]
                if j > 0:
                    paths[i][j] += paths[i][j - 1]
        return paths[m - 1][n - 1]

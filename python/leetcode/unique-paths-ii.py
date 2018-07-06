class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid):
        """
        :type obstacleGrid: List[List[int]]
        :rtype: int
        """
        m = len(obstacleGrid)
        n = len(obstacleGrid[0]) if len(obstacleGrid) > 0 else 0
        paths = []
        for i in range(m):
            paths.append([0] * n)
        paths[0][0] = 1 if obstacleGrid[0][0] == 0 else 0

        for i in range(m):
            for j in range(n):
                if obstacleGrid[i][j] == 1:
                    continue
                if i > 0:
                    paths[i][j] += paths[i - 1][j]
                if j > 0:
                    paths[i][j] += paths[i][j - 1]
        print(paths)
        return paths[m - 1][n - 1]

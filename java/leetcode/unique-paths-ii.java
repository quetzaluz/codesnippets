class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length;
        int n = obstacleGrid.length > 0 ? obstacleGrid[0].length : 0;
        int[][] paths = new int[m][n];

        // If first coordinate is an obstacle this is unsolvable
        paths[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (obstacleGrid[i][j] == 1) {
                    continue;
                }
                if (i > 0) {
                    paths[i][j] += paths[i - 1][j];
                }
                if (j > 0) {
                    paths[i][j] += paths[i][j - 1];
                }
            }
        }
        return paths[m - 1][n - 1];
    }
}

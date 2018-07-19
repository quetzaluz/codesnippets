class Solution {
    public int longestIncreasingPath(int[][] matrix) {
        int rL = matrix.length;
        int max = 0;
        
        if (rL == 0) { return 0; }

        int cL = matrix[0].length;
        int[][] lP = new int[rL][cL]; // for storing longest paths at each coord

        for (int i = 0; i < rL; i++) {
            for (int j = 0; j < cL; j++) {
                // find longest path at each coord
                max = Math.max(max, pP(i, j, rL, cL, matrix, lP));
            }
        }

        return max;
    }
    
    private int pP (int i, int j, int rL, int cL, int[][] matrix, int[][] lP) {
        if (lP[i][j] != 0) { return lP[i][j] }
        int[] cX = {1, 0, 0, -1};
        int[] cY = {0, 1, -1, 0};
        int max = 1;
        int x = 0;
        int y = 0;

        for (int m = 0; m < 4; m++) {
            x = cX[m] + i;
            y = cY[m] + j;
            if (x >= 0 && y >= 0 && x < rL && y < cL && matrix[x][y] > matrix[i][j]) {
                max = Math.max(max, 1 + pP(x, y, rL, cL, matrix, lP));
            }
        }
        lP[i][j] = max;
        return max;
    }
}

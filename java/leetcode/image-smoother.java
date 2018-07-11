class Solution {
    public int[][] imageSmoother(int[][] M) {
        int[][] smoothed = new int[M.length][M.length > 0 ? M[0].length : 0];
        for (int c = 0; c < M.length; c++) {
            for (int r = 0; r < M[c].length; r++) {
                smoothed[c][r] = smoothPixel(M, c, r);
            }
        }
        return smoothed;
    }

    private int smoothPixel(int[][] M, int c, int r) {
        int totalCount = 0;
        int totalBlack = 0;
        for (int cCoord = c - 1; cCoord <= c + 1; cCoord++) {
            for (int rCoord = r - 1; rCoord <= r + 1; rCoord++) {
                if (cCoord < M.length && cCoord >= 0 && rCoord < M[0].length && rCoord >= 0) {
                    totalCount++;
                    totalBlack += M[cCoord][rCoord];
                }
            }
        }
        return Math.round(totalBlack / totalCount);
    }
}

class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length - 1; i++) {
            int maxCheck = i == 0 ? matrix[0].length - 1 : 1;
            for (int j = 0; j < maxCheck; j++) {
                int val = matrix[i][j];
                // Check diagonals for this val
                int c = j + 1;
                int r = i + 1;
                while (r < matrix.length && c < matrix[0].length) {
                    if (matrix[r][c] != val) {
                        return false;
                    }
                    c++;
                    r++;
                }
            }
        }
        return true;
    }
}

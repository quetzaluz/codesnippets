class Solution {
    public void rotate(int[][] matrix) {
        int temp = 0;
        for (int c = 0; c < matrix.length; c++) {
            for (int r = 0; r < matrix[c].length; r++) {
                if (c < r) {
                    temp = matrix[c][r];
                    matrix[c][r] = matrix[r][c];
                    matrix[r][c] = temp;
                }
            }
        }
        for (int c = 0; c < matrix.length; c++) {
            for (int r = 0; r < Math.round(matrix[c].length /2); r++) {
                temp = matrix[c][r];
                matrix[c][r] = matrix[c][matrix[c].length - 1- r];
                matrix[c][matrix[c].length - 1 - r] = temp;              
            }
        }
    }
}

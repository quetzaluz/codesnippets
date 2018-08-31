class Solution {
    public int[][] generateMatrix(int n) {
        int startN = 0;
        int endN = n - 1;
        int startM = 0;
        int endM = n - 1;
        int[][] matrix = new int[n][n];
        int position = 0;
        while (startN <= endN && startM <= endM) {
            // go across to the right
            for (int i = startM; i <= endM; i++) {
                matrix[startN][i] = ++position;
            }
            startN++;

            // go down
            for (int i = startN; i <= endN; i++) {
                matrix[i][endM] = ++position;
            }
            endM--;

            // go across to the left
            if (startN <= endN) {
                for (int i = endM; i >= startM; i--) {
                    matrix[endN][i] = ++position;
                }
                endN--;
            }

            // go up
            if (startM <= endM) {
                for (int i = endN; i >= startN; i--) {
                    matrix[i][startM] = ++position;
                }
                startM++;
            }
        }
        return matrix;
    }
}

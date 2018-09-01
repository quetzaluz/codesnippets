class Solution {
    public int[][] spiralMatrixIII(int R, int C, int r0, int c0) {
        int r = r0;
        int c = c0;
        int[][] result = new int[R * C][2];
        result[0][0] = r;
        result[0][1] = c;
        int visits = 1;
        int steps = 1;
        while (visits < R * C) {
            // across to the right
            for (int i = 0; i < steps; i++) {
                c++;
                if (r < R && r >= 0 && c < C && c >= 0) {
                    result[visits][0] = r;
                    result[visits][1] = c;
                    visits++;
                }
            }
        
            // down
            for (int i = 0; i < steps; i++) {
                r++;
                if (r < R && r >= 0 && c < C && c >= 0) {
                    result[visits][0] = r;
                    result[visits][1] = c;
                    visits++;
                }
            }
            steps++;
            
            // across to the right
            for (int i = 0; i < steps; i++) {
                c--;
                if (r < R && r >= 0 && c < C && c >= 0) {
                    result[visits][0] = r;
                    result[visits][1] = c;
                    visits++;
                }
            }
            
            // up
            for (int i = 0; i < steps; i++) {
                r--;
                if (r < R && r >= 0 && c < C && c >= 0) {
                    result[visits][0] = r;
                    result[visits][1] = c;
                    visits++;
                }
            }
            steps++;
        }
        return result;
    }
}
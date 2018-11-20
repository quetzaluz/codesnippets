class Solution {
    public int[] findDiagonalOrder(int[][] matrix) {
        if (matrix.length == 0) {
            int[] result = new int[0];
            return result;
        }
        boolean up = true;
        int y = 0;
        int x = 0;
        int[] result = new int[matrix.length * matrix[0].length];
        int i = 0;
        while (y < matrix.length && x < matrix[0].length) {
          result[i] = matrix[y][x];
          i++;
          if (up) {
            if (x + 1 < matrix[0].length && y - 1 >= 0) {
              x++;
              y--;
            } else if (x + 1 >= matrix[0].length) {
              up = false;
              y++;
            } else if (y - 1 < 0) {
              up = false;
              x++;
            }
          } else {
            if (y + 1 < matrix.length && x - 1 >= 0) {
              x--;
              y++;
            } else if (y + 1 >= matrix.length) {
              up = true;
              x++;
            } else if (x - 1 < 0) {
              up = true;
              y++;
            }
          }
        }
        return result;
    }
}

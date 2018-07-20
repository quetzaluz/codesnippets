class Solution {
    public int islandPerimeter (int[][] grid) {
        int s = 0; // square we will be inspecting
        int p = 0; // perimiter
        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[r].length; c++) {
                s = grid[r][c];
                if (s == 1) {
                    p += countPerim(r, c, grid);
                }
            }
        }
        return p;
    }

    private int countPerim (int r, int c, int[][] grid) {
        int p = 0;
        if (r - 1 < 0 || grid[r - 1][c] == 0) {
            // north is ocean or blank
            p += 1;
        }
        if (r + 1 >= grid.length || grid[r + 1][c] == 0) {
            // south is ocean or blank
            p += 1;
        }
        if (c - 1 < 0 || grid[r][c-1] != 1) {
            // east is ocean or blank
            p += 1;
        }
        if (c + 1 >= grid[0].length || grid[r][c + 1] != 1) {
            // west is ocean or blank
            p += 1;
        }
        return p;
    }
}

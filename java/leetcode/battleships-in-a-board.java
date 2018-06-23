class Solution {
    public int countBattleships(char[][] board) {
        int count = 0;
        for (int c = 0; c < board.length; c++) {
            for (int r = 0; r < board[0].length; r++) {
                if (board[c][r] == 'X' && (r - 1 < 0 || board[c][r - 1] != 'X') && (c - 1 < 0 || board[c - 1][r] != 'X')) {
                    count++;
                }
            }
        }
        return count;
    }
}

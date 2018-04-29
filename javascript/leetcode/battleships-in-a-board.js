/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    count = 0
    for (var c = 0; c < board.length; c++) {
        for (var r = 0; r < board[0].length; r++) {
            if (board[c][r] == 'X' && board[c][r - 1] !== 'X' && (! board[c - 1] || board[c - 1][r] !== 'X')) {
                count++
            }
        }
    }
    return count
};

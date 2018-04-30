class Solution:
    def countBattleships(self, board):
        """
        :type board: List[List[str]]
        :rtype: int
        """
        count = 0
        for c in range(len(board)):
            for r in range(len(board[0])):
                if board[c][r] == 'X' and (r - 1 < 0 or board[c][r - 1] != 'X') and (c - 1 < 0 or board[c - 1][r] != 'X'):
                    count += 1
        return count

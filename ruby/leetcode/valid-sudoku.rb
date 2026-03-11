# @param {Character[][]} board
# @return {Boolean}
def is_valid_sudoku(board)
    # Take advantage of fixed size of sudoku board
    for i in (0..8)
        return false unless is_valid_row(i, board)
        return false unless is_valid_col(i, board)
        return false unless is_valid_block(i, board)
    end
    return true
end

def is_valid_row(i, board)
    row = board[i]
    is_valid_set(row)
end

def is_valid_col(i, board)
    col = board.map{|row| row[i]}
    is_valid_set(col)
end

def is_valid_block(i, board)
  # Calculate the top-left corner of the 3x3 block
  row_start = (i / 3) * 3
  col_start = (i % 3) * 3

  # Slice the 3 rows and then slice the 3 columns from each row
  block = board[row_start, 3].map do |row|
    row[col_start, 3]
  end.flatten

  is_valid_set(block)
end

def is_valid_set(set)
    seen = {}
    for i in set
        if i != '.'
            return false if seen[i]
            seen[i] = true
        end
    end
    return true
end

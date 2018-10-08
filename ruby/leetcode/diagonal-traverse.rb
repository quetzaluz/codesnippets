# @param {Integer[][]} matrix
# @return {Integer[]}
def find_diagonal_order(matrix)
    up = true # current direction of traversal
    y = 0
    x = 0
    result = []
    while y < matrix.size() && x < matrix[0].size()
        result << matrix[y][x]
        if up
            if x + 1 < matrix[0].size() && y - 1 >= 0
                x = x + 1
                y = y - 1
            elsif x + 1 >= matrix[0].size()
                up = false
                y = y + 1
            elsif y - 1 < 0
                up = false
                x = x + 1
            end
        elsif !up
            if y + 1 < matrix.size() && x - 1 >= 0
                x = x - 1
                y = y + 1
            elsif y + 1 >= matrix.size()
                up = true
                x = x + 1
            elsif x - 1 < 0
                up = true
                y = y + 1
            end
        end
    end
    return result
end

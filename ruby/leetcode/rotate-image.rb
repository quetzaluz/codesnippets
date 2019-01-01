# @param {Integer[][]} matrix
# @return {Integer[][]}
def rotate(matrix)
    temp = 0
    for c in 0...matrix.size()
        for r in 0...matrix[c].size()
            if c < r
                temp = matrix[c][r]
                matrix[c][r] = matrix[r][c]
                matrix[r][c] = temp
            end
        end
    end
    for c in 0...matrix.size()
        for r in 0...(matrix[c].size() / 2)
            temp = matrix[c][r]
            matrix[c][r] = matrix[c][matrix[c].size() - 1 - r]
            matrix[c][matrix[c].size() -1 - r] = temp
        end
    end
end

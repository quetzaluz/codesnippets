# @param {Integer[][]} matrix
# @return {Boolean}
def is_toeplitz_matrix(matrix)
    for i in 0..(matrix.length - 1) do
        max_check = if i == 0 then matrix[0].length - 1 else 1 end
        for j in 0..max_check do
            val = matrix[i][j]
            c = j + 1
            r = i + 1
            while (r < matrix.length && c < matrix[0].length)
                if matrix[r][c] != val
                    return false
                end
                c += 1
                r += 1
            end
        end
    end
    return true
end
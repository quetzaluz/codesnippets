# @param {Integer} n
# @return {Integer[][]}
def generate_matrix(n)
    start_n = 0
    end_n = n - 1
    start_m = 0
    end_m = n - 1
    matrix = initializeMatrix(n)
    position = 1
    while start_n <= end_n and start_m <= end_m
        # Go across the top of the matrix
        for i in start_m..(end_m) do
            matrix[start_n][i] = position
            position += 1
        end
        start_n += 1

        # Go down the right of the matrix
        for i in start_n..(end_n) do
            matrix[i][end_m] = position
            position += 1
        end
        end_m -= 1

        # Go back along the bottom
        if start_n <= end_n
            end_m.downto(start_m) do |i|
                matrix[end_n][i] = position
                position += 1
            end
            end_n -= 1
        end

        # Go up along the left
        if start_m <= end_m
            end_n.downto(start_n) do |i|
                matrix[i][start_m] = position
                position += 1
            end
            start_m += 1
        end
    end
    return matrix
end
            
def initializeMatrix(n)
    matrix = []
    for i in 0...n do
        matrix << Array.new(n)
    end
    return matrix
end

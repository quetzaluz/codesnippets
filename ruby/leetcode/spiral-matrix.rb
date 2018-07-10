# @param {Integer[][]} matrix
# @return {Integer[]}
def spiral_order(matrix)
    @start_n = 0
    @end_n = matrix.size - 1
    @start_m = 0
    @end_m = if matrix.size > 0 then matrix[0].size - 1 else -1 end
    @results = []
    
    while @start_n <= @end_n and @start_m <= @end_m

        # Go across the top of the matrix
        (@start_m..@end_m).each do |i|
            @results.push(matrix[@start_n][i])
        end
        @start_n += 1
    
        # Go down the right of the matrix
        (@start_n..@end_n).each do |i|
            @results.push(matrix[i][@end_m])
        end
        @end_m -= 1

        # Go back along the bottom
        if @start_n <= @end_n
            (@end_m).downto(@start_m).each do |i|
                @results.push(matrix[@end_n][i])
            end
            @end_n -= 1
        end

        # Go up along the left
        if @start_m <= @end_m
            (@end_n).downto(@start_n).each do |i|
                @results.push(matrix[i][@start_m])
            end
            @start_m += 1
        end
    end
    @results
end

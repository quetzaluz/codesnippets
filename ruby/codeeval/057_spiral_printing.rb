def build_matrix(n, m, vals)
    @matrix_values = vals.split(" ")
    @matrix = Array.new(n) { Array.new(m) }
    (0...n).each do |row|
        (0...m).each do |col|
            @matrix[row][col] = @matrix_values.shift
        end
    end
    @matrix
end

def spiral_printing(line)
    #  n = (rows),  m = (columns) vals = (numeric values in row major order) 
    n, m, vals = line.split(";")
    @start_n = 0
    @end_n = n.to_i - 1
    @start_m = 0
    @end_m = m.to_i - 1
    @this_matrix = build_matrix(n.to_i, m.to_i, vals)
    @results = []
    
    while @start_n <= @end_n and @start_m <= @end_m

        # Go across the top of the matrix
        (@start_m..@end_m).each do |i|
            @results.push(@this_matrix[@start_n][i])
        end
        @start_n += 1
    
        # Go down the right of the matrix
        (@start_n..@end_n).each do |i|
            @results.push(@this_matrix[i][@end_m])
        end
        @end_m -= 1

        # Go back along the bottom
        if @start_n <= @end_n
            (@end_m).downto(@start_m).each do |i|
                @results.push(@this_matrix[@end_n][i])
            end
            @end_n -= 1
        end

        # Go up along the left
        if @start_m <= @end_m
            (@end_n).downto(@start_n).each do |i|
                @results.push(@this_matrix[i][@start_m])
            end
            @start_m += 1
        end
    end
    puts @results.join(" ")
    0
end

File.open(ARGV[0]).each_line do |line|
    spiral_printing(line)
end

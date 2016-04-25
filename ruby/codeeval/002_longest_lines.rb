@length = nil
@results = []
@smallest_in_results = nil

def find_longest_lines(line)
    if @length.nil?
        @length = line.to_i
    elsif @results.length < @length
        @results.push(line)
        @results.sort!{|x, y| y.length - x.length}
        @smallest_in_results = @results[-1].length
    elsif line.length >= @smallest_in_results
        @results.push(line)
        @results.sort!{|x, y| y.length - x.length}
        @results.pop
        @smallest_in_results = @results[-1].length
    end
end

def print_results
    @results.each do |longest|
        puts longest
    end
    return 0
end

File.open(ARGV[0]).each_line do |line|
    find_longest_lines(line)
end

print_results
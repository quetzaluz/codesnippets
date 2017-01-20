def ap(inp)
    inp = inp.split(',')
    n = inp[0].to_i
    puts (inp[1].strip * n).split('').combination(n).map(&:join).uniq.sort.join(",")
end

File.open(ARGV[0]).each_line do |line|
    ap(line)
end
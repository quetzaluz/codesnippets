def d(line)
    inputs = line.split(';')
    arr = inputs[1].strip().split(',')
    res = {}
    arr.each do |i|
        if res[i]
            puts(i)
            return
        else
            res[i] = 1
        end
    end
end


File.open(ARGV[0]).each_line do |line|
    d(line)
end

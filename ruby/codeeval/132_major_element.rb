def me(line)
    a = line.split(',')
    l = a.length / 2
    c = {}
    a.each do |i|
        if c[i]
            c[i] += 1
            return i if c[i] >= l
        else
            c[i] = 1
        end
    end
    return 'None'
end
File.open(ARGV[0]).each_line do |line|
    puts(me(line))
end

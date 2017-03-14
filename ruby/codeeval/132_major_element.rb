def me(line)
    a = line.split(',')
    l = a.length / 2
    c = {}
    m = a[0]
    a.each do |i|
        if c[i]
            c[i] += 1
            m = i if c[i] > c[m]
        else
            c[i] = 1
        end
    end
    c[m] >= l ? m : 'None'
end
File.open(ARGV[0]).each_line do |line|
    puts(me(line))
end

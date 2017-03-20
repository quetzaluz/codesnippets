def ss(line)
    t = line.strip().split(',')
    i = t[0]
    s = t[1]
    se = s.gsub('*', '.*')
    se = se.gsub('\.*', '\*')
    m = i =~ Regexp.new(se)
    return !!m
end

File.open(ARGV[0]).each_line do |line|
    puts(ss(line))
end

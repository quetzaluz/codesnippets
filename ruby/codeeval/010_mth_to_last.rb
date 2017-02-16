def m(line)
    puts(line)
    r = line.strip.split(' ')
    i = r.pop.to_i
    id = r.length - i
    l = id >= 0 ? r[id] : nil
    puts(l) if l
end

File.open(ARGV[0]).each_line do |line|
    m(line)
end

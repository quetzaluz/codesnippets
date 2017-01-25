def st(line)
    res = []
    line.split(' ').each do |n|
        r = 0
        si = n.split(':')
        r += si[0].to_i * 3600
        r += si[1].to_i * 60
        r += si[2].to_i
        res << [n, r]
    end
    return res.sort {|a,b| b[1] <=> a[1] }.map{ |x| x[0] }.join(' ')
end
File.open(ARGV[0]).each_line do |line|
    puts(st(line))
end

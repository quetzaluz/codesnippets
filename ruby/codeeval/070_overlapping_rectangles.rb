def ol(line)
    a = line.split(',').map(&:to_i)
    b1 = a[0..3] 
    b2 = a[4..-1]
    if ((b1[0] > b2[2] || b2[0] > b1[2]) || (b1[1] < b2[3] || b2[1] < b1[3]))
        return 'False'
    else
        return 'True'
    end
end


File.open(ARGV[0]).each_line do |line|
    puts(ol(line))
end

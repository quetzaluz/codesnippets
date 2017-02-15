def ol(line)
    a = line.split(',').map(&:to_i)
    if ((a[0] > a[6] || a[4] > a[2]) || (a[1] < a[7] || a[5] < a[3]))
        return 'False'
    else
        return 'True'
    end
end

File.open(ARGV[0]).each_line do |line|
    puts(ol(line))
end

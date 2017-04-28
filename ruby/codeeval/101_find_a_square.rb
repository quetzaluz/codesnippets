def ds(p1, p2)
    return Math.sqrt(((p1[0] - p2[0]) ** 2) + ((p1[1] - p2[1]) ** 2))
end

def find_s(test)
    x = test.strip()[1...-1].split('), (').map{ |y| y.split(',').map{ |z| z.to_i } }
    d = []
    d << ds(x[0], x[1])
    d << ds(x[1], x[2])
    d << ds(x[2], x[3])
    d << ds(x[3], x[0])
    d << ds(x[0], x[2])
    d << ds(x[1], x[3])
    d.sort!
    d[0] != 0.0 and d[0] == d[1] and d[0] == d[2] and d[0] == d[3] and d[4] == d[5]
end

File.open(ARGV[0]).each_line do |line|
    puts(find_s(line))
end

OPS = ['+', '/', '*']

def pref(line)
    s = line.split(' ')
    r = []
    s.reverse.each do |i|
        if OPS.include?(i)
            r1 = r.pop()
            r2 = r.pop()
            if i == '+'
                r.push(r1 + r2)
            elsif i == '*'
                r.push(r1 * r2)
            elsif i == '/'
                r.push(r1.to_f / r2.to_f)
            end
        else
            r.push(i.to_i)
        end
    end
    rf = r[0]
    ri = r[0].to_i
    return ri == rf ? ri : rf
end

File.open(ARGV[0]).each_line do |line|
    puts(pref(line))
end

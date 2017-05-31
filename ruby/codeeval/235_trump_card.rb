ORDER = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

def gc(c1, c2, s)
    if c1[-1] == s
        if c2[-1] != s
            return c1
        end
    elsif c2[-1] == s
        return c2
    end
    c1i = ORDER.index(c1[0...-1])
    c2i = ORDER.index(c2[0...-1])
    if c1i > c2i
        return c1
    elsif c1i < c2i
        return c2
    else
        return "#{c1} #{c2}"
    end
end

def st(inp)
    inps = inp.strip.split(' | ')
    s = inps[1]
    cs = inps[0].split(' ')
    c1 = cs[0]
    c2 = cs[1]
    return gc(c1, c2, s)
end

File.open(ARGV[0]).each_line do |line|
	puts(st(line))
end
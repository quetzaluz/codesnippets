def bal(inp)
    min_o = 0
    max_o = 0
    pc = nil
    inp.split('').each do |c|
        if c == '('
            max_o += 1
            if pc == nil || pc != ':'
                min_o += 1
            end
        elsif c == ')'
            min_o = [0, min_o - 1].max
            if pc == nil || pc != ':'
                max_o -= 1
                if max_o < 0
                    break
                end
            end
        end
        pc = c
    end
    (max_o >= 0 && min_o == 0) ? 'YES' : 'NO'
end

File.open(ARGV[0]).each_line do |line|
    puts(bal(line))
end

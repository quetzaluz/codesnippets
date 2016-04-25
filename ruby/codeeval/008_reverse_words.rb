def reverse(input)
       w = input.chomp.strip.split(" ").to_a
       l = w.length
       (((l - 1) / 2).round).downto(0).each do |i|
             t = w[i]
             w[i] = w[l - i]
             w[l - i] = t
         end
       puts w.join(" ").gsub(/^\s/, '')
       0
end

File.open(ARGV[0]).each_line do |line|
    reverse(line)
end
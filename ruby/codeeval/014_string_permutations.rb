def permutations(word)
    letters = word.scan(/.{1}/)
    puts letters.permutation.map(&:join).sort.join(",")
    0
end

File.open(ARGV[0]).each_line do |line|
    permutations(line)
end
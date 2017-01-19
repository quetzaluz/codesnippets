def permutations(word)
    puts word.strip.split('').permutation.map(&:join).sort.join(",")
end

File.open(ARGV[0]).each_line do |line|
    permutations(line)
end
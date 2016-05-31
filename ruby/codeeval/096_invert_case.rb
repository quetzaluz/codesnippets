File.open(ARGV[0]).each_line do |line|
  s = ''
  (0...(line.length)).each do |i|
    s += if (d = line[i].downcase) == line[i]
      line[i].upcase
    else
       d
    end
  end
  puts s
end
def ends_w?(l)
  w, f = l.strip().split(',')
  w[(f.length * -1)..-1] == f
end

File.open(ARGV[0]).each_line do |line|
  puts(ends_w?(line) ? 1 : 0)
end

def modulo(x, y)
	q = x / y
	return x - (q * y)
end

File.open(ARGV[0]).each_line do |line|
    a = line.split(',').map(&:to_i)
    puts modulo(a[0], a[1])
end
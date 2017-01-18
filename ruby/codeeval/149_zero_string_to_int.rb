def ti(inp)
  f = nil
  r = ''
  inp.split(' ').each do |z|
    if !f
        f = z
    else
      if f == '00'
        r += '1' * z.length
      else
        r += z
      end
      f = nil
    end
  end
  puts r.to_i(2)
end

File.open(ARGV[0]).each_line do |line|
  ti(line)
end

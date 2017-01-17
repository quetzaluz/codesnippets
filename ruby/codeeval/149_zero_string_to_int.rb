def ti(inp)
  b = inp.split(' ')
  f = nil
  s = 0
  r = ''
  b.each do |z|
    if !f
        f = z
    else
      if f == '00'
        r += z.gsub('0', '1')
      else
        r += z
      end
      f = nil
    end
  end
  return r.to_i(2)
end

File.open(ARGV[0]).each_line do |line|
  puts(ti(line))
end

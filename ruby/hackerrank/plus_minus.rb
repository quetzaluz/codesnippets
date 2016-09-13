#!/bin/ruby

n = gets.strip.to_i
arr = gets.strip
arr = arr.split(' ').map(&:to_i)
n = 0
p = 0
z = 0
l = arr.length.to_f
arr.each do |i|
    if i < 0
      n += 1
    elsif i == 0
      z += 1
    else
      p += 1
    end
end
puts (p.to_f / l).round(6)
puts (n.to_f / l).round(6)
puts (z.to_f / l).round(6)

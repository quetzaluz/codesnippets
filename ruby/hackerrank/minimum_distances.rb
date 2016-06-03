#!/bin/ruby

n = gets.strip.to_i
A = gets.strip.split(' ').map(&:to_i)
orig_min = 900000000
min = orig_min
A.each_with_index do |i, ii|
    A.each_with_index do |j, jj|
        if i == j && ii != jj && (v = (ii - jj).abs) < min
            min = v
        end
    end
end

if min == orig_min
    print -1
else
    print min
end
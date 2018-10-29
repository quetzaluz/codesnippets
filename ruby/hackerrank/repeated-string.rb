#!/bin/ruby

require 'json'
require 'stringio'

# Complete the repeatedString function below.
def repeatedString(s, n)
    repeats = n / s.size
    remainder = n % s.size
    i = 0
    full_count = 0
    remainder_count = 0
    while i < s.size
        if s[i] == 'a'
            if i < remainder
                remainder_count += 1
            end
            full_count += 1
        end
        i += 1
    end
    return (full_count * repeats) + remainder_count
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

s = gets.to_s.rstrip

n = gets.to_i

result = repeatedString s, n

fptr.write result
fptr.write "\n"

fptr.close()

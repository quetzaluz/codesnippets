#!/bin/ruby

require 'json'
require 'stringio'

# Complete the equalizeArray function below.
def equalizeArray(arr)
    counts = {}
    max_count = 0
    arr.each do |i|
        counts[i] = if counts[i] then counts[i] + 1 else 1 end
        max_count = [max_count, counts[i]].max
    end
    return arr.size - max_count

end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.to_i

arr = gets.rstrip.split(' ').map(&:to_i)

result = equalizeArray arr

fptr.write result
fptr.write "\n"

fptr.close()

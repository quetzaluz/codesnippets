#!/bin/ruby

require 'json'
require 'stringio'

# Complete the diagonalDifference function below.
def diagonalDifference(arr)
    r = 0
    c = 0
    sum1 = 0
    sum2 = 0
    while r < arr.size()
        sum1 += arr[r][c]
        c += 1
        r += 1
    end
    c = 0
    r -= 1
    while r >= 0
        sum2 += arr[r][c]
        c += 1
        r -= 1
    end
    return (sum2 - sum1).abs
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.to_i

arr = Array.new(n)

n.times do |i|
    arr[i] = gets.rstrip.split(' ').map(&:to_i)
end

result = diagonalDifference arr

fptr.write result
fptr.write "\n"

fptr.close()

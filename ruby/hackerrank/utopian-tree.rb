#!/bin/ruby

require 'json'
require 'stringio'

# Complete the utopianTree function below.
def utopianTree(n)
    i = 1
    r = 1
    while i <= n
        if i % 2 == 1
            r *= 2
        else
            r += 1
        end
        i += 1
    end
    return r
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

t = gets.to_i

t.times do |t_itr|
    n = gets.to_i

    result = utopianTree n

    fptr.write result
    fptr.write "\n"
end

fptr.close()

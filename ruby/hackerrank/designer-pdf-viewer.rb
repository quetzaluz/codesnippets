#!/bin/ruby

require 'json'
require 'stringio'

# Complete the designerPdfViewer function below.
def designerPdfViewer(h, word)
    max_height = 0
    word.split('').each do |char|
        pos = char.ord - 97
        max_height = [h[pos], max_height].max
    end
    return max_height * word.size
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

h = gets.rstrip.split(' ').map(&:to_i)

word = gets.to_s.rstrip

result = designerPdfViewer h, word

fptr.write result
fptr.write "\n"

fptr.close()

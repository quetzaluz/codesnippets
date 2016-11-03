def string_list(input)
n, letters = input.split(',')
n = n.to_i
letters = letters.split('').uniq
found_words = []
found_words = permute(letters, n, 2, found_words)
puts found_words.uniq.join(',')
end

def permute(letters, n, iterations = 1, found_words = [], word = '')
return found_words if iterations == 0
current_letter_index = 0
while current_letter_index < letters.length
current_letter = letters[current_letter_index]
found_words << current_letter * n if iterations == 1
word += current_letter
if word.length == n
found_words << word
word = ''
end
for j in letters
word += j
if word.length == n
found_words << word
word = ''
end
end
if word.length == n
found_words << word
word = ''
end
current_letter_index += 1
end
permute(letters, n, iterations - 1, found_words, word)
end

string_list('4,pop')

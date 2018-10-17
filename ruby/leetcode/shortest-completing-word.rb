# @param {String} license_plate
# @param {String[]} words
# @return {String}
def shortest_completing_word(license_plate, words)
    lp = pull_letters(license_plate)
    min_length = Float::INFINITY
    shortest_word = nil
    for i in 0...words.size()
        if has_match(lp, words[i])
            if words[i].size() < min_length
                min_length = words[i].size()
                shortest_word = words[i]
            end
        end
    end
    return shortest_word
end

def pull_letters(license_plate)
    license_plate.downcase.gsub(/[\d|\s]?/, '').split('')
end

def has_match(lp, word)
    candidates = lp.clone()
    for i in 0...word.size()
        char_index = candidates.index(word[i])
        if char_index
            candidates.delete_at(char_index)
        end
        return true if candidates.size() === 0
    end
    return false
end

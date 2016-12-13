# anti_vowel
def anti_vowel(text):
    ltext = text.lower()
    t = zip(text, ltext)
    vs = ['a', 'e', 'i', 'o', 'u']
    output = ''
    for c, lc in t:
        is_v = False
        for v in vs:
            if v == lc:
               is_v = True
        if is_v != True:
            output += c
    return(output)

# substring
def substr(text, start, end):
    s_end = min(end, (len(text) - 1))
    start = max(0, start)
    i = start
    output = ''
    while i <= s_end:
        output += text[i]
        i += 1
    return output






# Scrabble score
score = {"a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2, 
         "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3, 
         "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1, 
         "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4, 
         "x": 8, "z": 10}

def scrabble_score(word):
    s = 0
    w = word.lower()
    for c in w:
        s += score[c]
    return s

# censor word
def censor(text, word):
    subs = '*' * len(word);
    words = text.split(' ')
    for i, w in enumerate(words):
        if w == word:
            words[i] = subs
    return ' '.join(words)

# count frequency of item in array
def count(sequence, item):
    count = 0
    for i in sequence:
        if i == item:
            count += 1
    return count

# remove odd integers from array
def purify(sequence):
    new_sequence = []
    for i in sequence:
        if i % 2 == 0:
            new_sequence.append(i)
    return new_sequence

# product of all elements in array
def product(seq):
    p = 1
    for i in seq:
        p *= i
    return p

# print only one occurence of duplicate values in array
def remove_duplicates(seq):
    new_seq = []
    for i in seq:
        hasIt = False
        for j in new_seq:
            if j == i:
                hasIt = True
        if hasIt == False:
            new_seq.append(i)
    return new_seq
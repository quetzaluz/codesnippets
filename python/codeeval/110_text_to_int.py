import sys

UNI = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90 }
BAS = { 'hundred': 100, 'thousand': 1000, 'million': 1000000 }

def p(i):
    r = ''
    m = 1
    t = 0
    for w in reversed(i.strip().split(' ')):
        if w in BAS:
            if BAS[w] == 100:
                m *= BAS[w]
            else:
                m = BAS[w]
        elif w in UNI:
            t += UNI[w] * m
        elif w == 'negative':
            r = '-'
    return r + str(t)


with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(p(test))

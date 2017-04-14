import re
import sys

def fp(test):
    inp = test.split(' ')
    r = inp.pop(0)
    r = re.sub('\*', '.*', re.sub('\?', '.', re.sub('\.', '\.', r))) + '$'
    result = []
    for i in inp:
        if re.match(r, i):
            result.append(i)
    return ' '.join(result) if len(result) > 0 else '-'

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(fp(test))

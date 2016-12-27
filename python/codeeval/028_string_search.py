import sys
import re

def ss(test):
    i, s = test.split(',')
    se = re.sub(r'([^\\])(\*)', r'\1.*', s)
    m = re.search(se, i)
    return 'true' if m else 'false'

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(ss(test))
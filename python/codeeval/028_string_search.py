import sys
import re

def ss(test):
    i, s = test.strip().split(',')
    se = re.sub(r'\*', '.*', s)
    se = re.sub(r'(\\\.\*)', '\*', se)
    m = re.search(se, i)
    if m:
        print('true')
    else:
        print('false')

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        ss(test)

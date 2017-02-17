import sys

def m(test):
    l = test.split(' ')
    i = int(l.pop())
    idx = len(l) - i
    if idx >= 0:
        v = l[idx]
        if (v is not None):
            print(v)

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        m(test)

import sys

C = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']


def conv(inp):
    r = ''
    for w in inp.rstrip().split(';'):
        r += str(C.index(w))
    return r
with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(conv(test))

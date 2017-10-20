import sys

def sm(inp):
    inp = inp.split(',')
    t = int(inp[0])
    f = int(inp[1])
    m = 2
    p = f
    while (p < t):
        p = m * f
        m += 1
    return p

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(sm(test))

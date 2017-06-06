import sys

def ti(inp):
    f = None
    r = ''
    for z in inp.split(' '):
        if f is None:
            f = z
        else:
            if f == '00':
                r += '1' * len(z)
            else:
                r += z
            f = None
    return int(r, 2)

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(ti(test))

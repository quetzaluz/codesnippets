import sys

ORDER = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

# Find greater card if no aces
def gc(c1, c2, s):
    if c1[-1] == s:
        return c1
    elif c2[-1] == s:
        return c2
    c1i = ORDER.index(c1[:-1])
    c2i = ORDER.index(c2[:-1])
    if c1i > c2i:
        return c1
    elif c1i < c2i:
        return c2
    else:
        return c1 + ' ' + c2


def st(inp):
    inps = inp.rstrip('\n').split(' | ')
    s = inps[1]
    cs = inps[0].split(' ')
    c1 = cs[0]
    c2 = cs[1]
    return gc(c1, c2, s)


with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(st(test))

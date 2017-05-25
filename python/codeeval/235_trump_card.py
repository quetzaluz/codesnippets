# AD 2H | H
# KD KH | C
# JH 10S | C
# 2H
# KD KH
# JH


import sys

ORDER = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

# handle suit based logic for ace
def ha(c1, c2, s):
    c1td = c1[0] == '2' and c1[1] == s
    c2td = c2[0] == '2' and c2[1] == s
    if c1td:
        return c1td
    elif c2td:
        return c2td
    else:
        if c1[0] == 'A':
            return c1
        elif c2[0] == 'A':
            return c2
        else:
            return c1 + ' ' + c2


# Find greater card if no aces
def gc(c1, c2, s):
    if len(c1) == 3:
        c1i = ORDER.index('10')
        c1si = 2
    else:
        c1i = ORDER.index(c1[0])
        c1si = 1


    if len(c2) == 3:
        c2i = ORDER.index('10')
        c2si = 2
    else:
        c2i = ORDER.index(c2[0])
        c2si = 1


    if c1i > c2i:
        return c1
    elif c1i < c2i:
        return c2
    else:
        if c1[c1si] == s:
            return c1
        elif c2[c2si] == s:
            return c2
        else:
            return c1 + ' ' + c2


def st(inp):
    inps = inp.strip().split(' | ')
    s = inps[1]
    cs = inps[0].split(' ')
    c1 = cs[0]
    c2 = cs[1]

    if c1[0] == 'A' or c2[0] == 'A':
        return ha(c1, c2, s)
    else:
        return gc(c1, c2, s)


with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(st(test))

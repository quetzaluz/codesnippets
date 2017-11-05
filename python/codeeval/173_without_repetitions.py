import sys

def without_rep(inp):
    l = None
    ret = ''
    for ch in inp:
        if ch != l:
            ret += ch
            l = ch
    return ret

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(without_rep(test))

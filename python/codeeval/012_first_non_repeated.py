import sys
def fnr(s):
    l_i = len(s) - 1
    if l_i == 0:
        return s
    res = dict()
    for (i, l) in enumerate(s):
        if l in res.keys():
            res[l] = res[l] + 1
        else:
            res[l] = 1
    for l in s:
        if res[l] == 1:
            return l

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(fnr(test.strip()))

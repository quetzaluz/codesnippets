import sys
def st(s):
    res = []
    ts = s.strip().split(' ')
    for t in ts:
        r = 0
        h, m, s = map(int, t.split(':'))
        r += h * 3600
        r += m * 60
        r += s
        res.append((t, r))
    res.sort(key=lambda tup: -1 * tup[1])
    return ' '.join([i[0] for i in res])

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(st(test))

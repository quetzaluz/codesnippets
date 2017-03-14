import sys

def me(test):
    a = test.split(',')
    l = len(a) // 2
    c = {}
    m = a[0]
    for i in a:
        if i in c:
            c[i] += 1
            if c[i] > c[m]:
                m = i
        else:
            c[i] = 1
    return m if c[m] >= l else None

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(me(test))

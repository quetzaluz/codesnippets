import sys

def me(test):
    a = test.split(',')
    l = len(a) // 2
    c = {}
    for i in a:
        if i in c:
            c[i] += 1
            if c[i] >= l:
                return i
        else:
            c[i] = 1
    return None

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(me(test))

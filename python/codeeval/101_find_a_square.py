import sys

def ds(p1, p2):
    return (p1[0] - p2[0])*(p1[0] - p2[0]) + (p1[1] - p2[1])*(p1[1] - p2[1])

def find_s(test):
    x = [[int(z) for z in y.split(',')] for y in test.rstrip()[1:-1].split('), (')]
    d1 = ds(x[0], x[1])
    d2 = ds(x[0], x[2])
    d3 = ds(x[0], x[3])
    if (d1 == d2 and 2*d1 == d3):
        d = ds(x[1], x[3])
        return 'true' if (a and d == ds(x[2], x[3]) and d == d1) else 'false'
    if (d1 == d3 and 2*d1 == d2):
        d = ds(x[1], x[2])
        return 'true' if (a and d == ds(x[2], x[3]) and d == d1) else 'false'
    if (d2 == d3 and 2*d2 == d1):
        d = ds(x[1], x[2])
        return 'true' if (a and d == ds(x[1], x[3]) and d == d2) else 'false'
    return 'false'

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(find_s(test))

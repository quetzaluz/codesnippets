import sys
import math

def ds(p1, p2):
    return math.sqrt(math.pow(p1[0] - p2[0], 2) + math.pow(p1[1] - p2[1], 2))

def find_s(test):
    x = [[int(z) for z in y.split(',')] for y in test.rstrip()[1:-1].split('), (')]
    d = []
    d.append(ds(x[0], x[1]))
    d.append(ds(x[1], x[2]))
    d.append(ds(x[2], x[3]))
    d.append(ds(x[3], x[0]))
    d.append(ds(x[0], x[2]))
    d.append(ds(x[1], x[3]))
    d.sort()
    if d[0] != 0 and d[0] == d[1] and d[0] == d[2] and d[0] == d[3] and d[4] == d[5]:
        return 'true'
    return 'false'

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(find_s(test))

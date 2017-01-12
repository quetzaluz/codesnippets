import sys

def mc(test):
    t = int(test)
    c = 0
    d = [5, 3, 1]
    while t > 0:
        for i in d:
            d_i = t // i
            if d_i > 0:
                c += d_i
                t -= (d_i * i)
    print(c)

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        mc(test)
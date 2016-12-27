import sys

def mod(str):
    x, y = str.split(',')
    ix = int(x)
    iy = int(y)
    return ix - ((ix // iy) * iy)

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(mod(test))

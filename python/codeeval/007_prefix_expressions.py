import sys

OPS = ['+', '/', '*']

def pref(line):
    s = line.split(' ')
    r = []
    for i in reversed(s):
        if i in OPS:
            r1 = r.pop()
            r2 = r.pop()
            if i == '+':
                r.append(r1 + r2)
            elif i == '*':
                r.append(r1 * r2)
            elif i == '/':
                r.append(r1 / r2)
        else:
            r.append(int(i))
    rf = r[0]
    ri = int(r[0])
    return ri if ri == rf else rf


with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(pref(test))

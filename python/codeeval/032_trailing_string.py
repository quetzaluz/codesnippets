import sys

def ew(line):
    l,e = line.strip().split(',')
    return 1 if l[(len(e) * -1):] == e else 0

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(ew(test))
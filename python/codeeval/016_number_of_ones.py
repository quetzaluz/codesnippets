import sys

def n1(test):
    return len(bin(int(test))[2:].replace('0', ''))

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(n1(test))
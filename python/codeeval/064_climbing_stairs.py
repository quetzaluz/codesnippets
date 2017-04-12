import sys
from math import factorial

def perm(one, two):
    return factorial(one+two)//(factorial(one)*factorial(two))

def cs(num):
    np = 0
    one = num
    two = 0
    while (one >= 0):
        np += perm(one, two)
        two += 1
        one = num - (2 * two)
    return np

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(cs(int(test)))

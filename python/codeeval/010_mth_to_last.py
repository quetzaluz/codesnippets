def m(test):
    return test.split(' ')[-2]
    
import sys

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(m(test))

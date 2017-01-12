def m(test):
    print(test.split(' ')[-2])
    
import sys

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        m(test)

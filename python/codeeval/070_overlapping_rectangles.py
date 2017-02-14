import sys

def ol(test):
    a = test.split(',')
    return not (int(a[0]) > int(a[6]) or int(a[4]) > int(a[2]) or int(a[1]) < int(a[7]) or int(a[5]) < int(a[3]))

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(ol(test))

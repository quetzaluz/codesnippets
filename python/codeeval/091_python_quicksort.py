import sys

def do_sort(array):
    less = []
    equal = []
    greater = []
    if len(array) > 1:
        pivot = array[0]
        for x in array:
            if pivot > x:
                less.append(x)
            elif pivot == x:
                equal.append(x)
            else:
                greater.append(x)
        return do_sort(less) + equal + do_sort(greater)
    else:
        return array

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        result = do_sort([float(x) for x in test.split(' ')])
        print(' '.join(["{:.3f}".format(x) for x in result]))

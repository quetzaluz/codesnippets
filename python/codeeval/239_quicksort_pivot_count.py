import sys

def do_sort(pivot_count, array):
    less = []
    equal = []
    greater = []
    if len(array) > 1:
        pivot_count += 1
        pivot = array[0]
        for x in array:
            if pivot > x:
                less.append(x)
            elif pivot == x:
                equal.append(x)
            else:
                greater.append(x)
        left_sort = do_sort(pivot_count, less)
        pivot_count = left_sort[0]
        right_sort = do_sort(pivot_count, greater)
        pivot_count = right_sort[0]
        return [pivot_count, left_sort[1] + equal + right_sort[1]]
    else:
        return [pivot_count, array]

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        result = do_sort(0, [float(x) for x in test.split(' ')])
        print(result[0])

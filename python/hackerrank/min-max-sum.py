#!/bin/python3

import os
import sys

#
# Complete the miniMaxSum function below.
#
def miniMaxSum(arr):
    min = 1000000000
    max = -1000000000
    total = 0
    for i in arr:
        if i < min:
            min = i
        if i > max:
            max = i
        total += i
    return '%s %s' % (total - max, total - min)

if __name__ == '__main__':
    arr = list(map(int, input().rstrip().split()))

    print(miniMaxSum(arr))

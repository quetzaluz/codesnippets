#!/bin/python3

import os
import sys

#
# Complete the diagonalDifference function below.
#
def diagonalDifference(a):
    #
    # Write your code here.
    #
    firstSum = 0
    secondSum = 0
    c = 0
    r = 0
    while c < len(a):
        firstSum += a[c][r]
        c += 1
        r += 1
    r = 0
    c = len(a) - 1
    while c >= 0:
        secondSum += a[c][r]
        c -= 1
        r += 1
    return abs(secondSum - firstSum)

if __name__ == '__main__':
    f = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    a = []

    for _ in range(n):
        a.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(a)

    f.write(str(result) + '\n')

    f.close()

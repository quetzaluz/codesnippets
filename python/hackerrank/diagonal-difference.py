#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the diagonalDifference function below.
def diagonalDifference(arr):
    r = 0
    c = 0
    sum1 = 0
    sum2 = 0
    while r < len(arr):
        sum1 += arr[r][c]
        c += 1
        r += 1
    c = 0
    r -= 1
    while r >= 0:
        sum2 += arr[r][c]
        c += 1
        r -= 1
    return abs(sum2 - sum1)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()

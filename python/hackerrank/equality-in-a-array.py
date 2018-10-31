#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the equalizeArray function below.
def equalizeArray(arr):
    counts = {}
    max_count = 0
    for i in arr:
        if i in counts:
            counts[i] += 1
        else:
            counts[i] = 1
        max_count = max(max_count, counts[i])
    return len(arr) - max_count

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    result = equalizeArray(arr)

    fptr.write(str(result) + '\n')

    fptr.close()

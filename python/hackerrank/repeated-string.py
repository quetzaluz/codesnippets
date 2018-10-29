#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the repeatedString function below.
def repeatedString(s, n):
    repeats = n // len(s)
    remainder = n % len(s)
    i = 0
    full_count = 0
    remainder_count = 0
    while i < len(s):
        if s[i] == 'a':
            if i < remainder:
                remainder_count += 1
            full_count += 1
        i += 1
    return (full_count * repeats) + remainder_count

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    n = int(input())

    result = repeatedString(s, n)

    fptr.write(str(result) + '\n')

    fptr.close()

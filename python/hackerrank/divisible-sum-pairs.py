#!/bin/python3

import sys

def divisibleSumPairs(n, k, ar):
    # Complete this function
    i0 = 0
    r = 0
    while i0 < n:
        i1 = i0 + 1
        while i1 < n:
            if (ar[i0] + ar[i1]) % k == 0:
                r += 1
            i1 += 1
        i0 += 1
    return r

n, k = input().strip().split(' ')
n, k = [int(n), int(k)]
ar = list(map(int, input().strip().split(' ')))
result = divisibleSumPairs(n, k, ar)
print(result)

#!/bin/python3

import os
import sys

def rotate(nums, k):
    new_arr = [None] * len(nums)
    for i in range(len(nums)):
        new_arr[(i + k) % len(nums)] = str(nums[i])
    return new_arr

if __name__ == '__main__':
    nd = input().split()

    n = int(nd[0])

    d = int(nd[1])

    a = list(map(int, input().rstrip().split()))
    
    print(' '.join(rotate(a, n - d)))

#!/bin/python3

import os
import sys

#
# Complete the staircase function below.
#
def staircase(n):
    #
    # Write your code here.
    #
    i = 1
    while i <= n:
        print(' ' * (n - i) + '#' * i)
        i += 1

if __name__ == '__main__':
    n = int(input())

    staircase(n)

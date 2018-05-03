#!/bin/python3

import os
import sys

#
# Complete the timeConversion function below.
#
def timeConversion(s):
    #
    # Write your code here.
    #
    pm = s[8:10] == 'PM'
    nums = s[0:8].split(':')
    if pm:
        nums[0] = str(int(nums[0]) % 12 + 12).zfill(2)
    else:
        nums[0] = str(int(nums[0]) % 12).zfill(2)
    return ':'.join(nums)

if __name__ == '__main__':
    f = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    f.write(result + '\n')

    f.close()

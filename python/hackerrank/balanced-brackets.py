#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the isBalanced function below.
class Solution:
    def hasUnclosedBrackets(self, values, thisType, otherType1, otherType2):
        return (values[thisType]['cnt'] == 0 or
            (len(values[otherType1]['idx']) - 1 >= 0 and values[otherType1]['idx'][len(values[otherType1]['idx']) - 1]) > (len(values[thisType]['idx']) - 1 >= 0 and values[thisType]['idx'][len(values[thisType]['idx']) - 1]) or
            (len(values[otherType2]['idx']) - 1 >= 0 and values[otherType2]['idx'][len(values[otherType2]['idx']) - 1]) > (len(values[thisType]['idx']) - 1 >= 0 and values[thisType]['idx'][len(values[thisType]['idx']) - 1]))

    def updateForClosedBrackets(self, values, thisType, otherType1, otherType2):
        if self.hasUnclosedBrackets(values, thisType, otherType1, otherType2):
            return False
        else:
            values[thisType]['cnt'] -= 1
            values[thisType]['idx'].pop()
            return values

    def updateForOpenBrackets(self, values, thisType, idx):
        values[thisType]['cnt'] += 1
        values[thisType]['idx'].append(idx)
        return values

    def isBalanced(self, s):
        """
        :type s: str
        :rtype: bool
        """
        v = {'p': {'idx': [], 'cnt': 0}, 's': {'idx': [], 'cnt': 0}, 'c': {'idx': [], 'cnt': 0}}
        for i in range(len(s)):
            l = s[i]
            if l == '(':
                v = self.updateForOpenBrackets(v, 'p', i)
            elif l == ')':
                v = self.updateForClosedBrackets(v, 'p', 'c', 's')
                if not v:
                    return 'NO'
            elif l == '[':
                v = self.updateForOpenBrackets(v, 's', i)
            elif l == ']':
                v = self.updateForClosedBrackets(v, 's', 'c', 'p')
                if not v:
                    return 'NO'
            elif l == '{':
                v = self.updateForOpenBrackets(v, 'c', i)
            elif l == '}':
                v = self.updateForClosedBrackets(v, 'c', 's', 'p')
                if not v:
                    return 'NO'
            prev = l
        if v['p']['cnt'] != 0 or v['s']['cnt'] != 0 or v['c']['cnt'] != 0:
            return 'NO'
        else:
            return 'YES'

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    solution = Solution()

    for t_itr in range(t):
        s = input()

        result = solution.isBalanced(s)

        fptr.write(result + '\n')

    fptr.close()

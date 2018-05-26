#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumLoss function below.
def minimumLoss(price):
	sp = [[i, v] for i, v in enumerate(price)]
	sp = sorted(sp, key=lambda p: p[1], reverse=True)
	min_loss = None
	for i in range(1, len(sp)):
		if min_loss is None or (sp[i - 1][0] < sp[i][0] and sp[i - 1][1] - sp[i][1] < min_loss):
			min_loss = sp[i - 1][1] - sp[i][1]
	return min_loss

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    price = list(map(int, input().rstrip().split()))

    result = minimumLoss(price)

    fptr.write(str(result) + '\n')

    fptr.close()

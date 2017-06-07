import sys
import re
from math import sqrt
def pyth(line):
    input = (re.sub('^\(', '',  re.sub('\)$', '', line))).split(') (')
    coords_a = [int(x) for x in input[0].split(', ')]
    coords_b = [int(x) for x in input[1].split(', ')]
    side_a = abs(coords_a[0] - coords_b[0])
    side_b = abs(coords_a[1] - coords_b[1])
    return int(sqrt((side_a * side_a) + (side_b * side_b)))

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(pyth(test))

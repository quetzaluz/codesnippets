import re
import sys

# func below assumes all inputs will have match
def ec(test):
    t, r = test.split(', ')
    m = re.findall(('[^%s*]?' % re.escape(r)), t)
    return ''.join(m)

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(ec(test))
import sys

m = {0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H', 8: 'I', 9: 'J', 10: 'K', 11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P', 16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U', 21: 'V', 22: 'W', 23: 'X', 24: 'Y', 25: 'Z'}
def cn(s_int):
    i = int(s_int)
    n = ''
    while i > 0:
        mod = (i - 1) % 26
        n = m[mod] + n
        i = (i - mod) // 26
    return n

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(cn(test))

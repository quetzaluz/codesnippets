import sys

m = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'J', 11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P', 17: 'Q', 18: 'R', 19: 'S', 20: 'T', 21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z'}
def cn(s_int):
    i = int(s_int)
    a = b = c = ''
    d_a = i // 676
    m_a = i % 676
    if d_a > 0:
        if m_a == 0:
            a = m[d_a - 1]
            b = m[26]
        else:
            a = m[d_a]
        i = m_a
    d_b = i // 26
    m_b = i % 26
    if d_b > 0:
        if m_b == 0:
            b = m[d_b - 1]
            c = m[26]
        else:
            b = m[d_b]
        i = m_b
    if i > 0:
        c = m[i]
    return a + b + c
with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(cn(test))

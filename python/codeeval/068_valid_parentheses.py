import sys

def vp(str):
    v = {'p': 0, 'b': 0, 'c': 0}
    prev = ''
    for l in str:
        if l == '(':
            v['p'] += 1
        elif l == ')':
            if prev == '' or prev == '[' or prev == '{':
                return False
            else:
                v['p'] -= 1
        elif l == '[':
            v['b'] += 1
        elif l == ']':
            if prev == '' or prev == '(' or prev == '{':
                return False
            else:
                v['b'] -= 1
        elif l == '{':
            v['c'] += 1
        elif l == '}':
            if prev == '' or prev == '[' or prev == '(':
                return False
            else:
                v['c'] -= 1
        prev = l
    if v['p'] != 0 or v['b'] != 0 or v['c'] != 0:
        return False
    else:
        return True

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(vp(test))
